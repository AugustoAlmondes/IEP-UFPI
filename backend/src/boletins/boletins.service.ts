import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoletimDto } from './dto/create-boletim.dto';
import { UpdateBoletimDto } from './dto/update-boletim.dto';

@Injectable()
export class BoletinsService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createBoletimDto: CreateBoletimDto, userId: number) {
        return this.prisma.boletins.create({
            data: {
                ...createBoletimDto,
                created_by_id: userId,
            },
        });
    }

    async findAll() {
        return this.prisma.boletins.findMany({
            orderBy: { date: 'desc' },
        });
    }

    async findOne(id: number) {
        const boletim = await this.prisma.boletins.findUnique({
            where: { id },
        });

        if (!boletim) {
            throw new NotFoundException(`Boletim com ID ${id} não encontrado`);
        }

        return boletim;
    }

    async update(id: number, updateBoletimDto: UpdateBoletimDto) {
        await this.findOne(id);

        return this.prisma.boletins.update({
            where: { id },
            data: updateBoletimDto,
        });
    }

    async remove(id: number) {
        await this.findOne(id);

        return this.prisma.boletins.delete({
            where: { id },
        });
    }
}
