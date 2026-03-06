import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';

@Injectable()
export class MembrosService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll() {
        return this.prisma.membros.findMany({
            select: {
                id: true,
                name: true,
                role: true,
                profile_image: true,
                curriculum: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                    },
                },
            },
            orderBy: { id: 'asc' },
        });
    }

    async remove(id: number) {
        const membro = await this.prisma.membros.findUnique({
            where: { id },
            select: { id: true, profile_image: true, user_id: true },
        });

        if (!membro) {
            throw new NotFoundException(`Membro com id ${id} não encontrado.`);
        }

        // Remove o arquivo de foto, se existir na pasta uploads/
        if (membro.profile_image) {
            try {
                // profile_image é a URL completa, extrai apenas o filename
                const filename = membro.profile_image.split('/uploads/').pop();
                if (filename) {
                    const filePath = join(process.cwd(), 'uploads', filename);
                    if (existsSync(filePath)) {
                        unlinkSync(filePath);
                    }
                }
            } catch {
                // Não bloqueia a exclusão se o arquivo não existir
            }
        }

        // Deleta o usuário (cascade apaga o membro também, conforme schema)
        await this.prisma.user.delete({ where: { id: membro.user_id } });

        return { message: 'Membro removido com sucesso.' };
    }
}
