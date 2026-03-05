import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const member = await this.prisma.membros.findUnique({
            where: { user_id: user.id },
        });

        if (!member) {
            throw new Error("Membro não encontrado");
        }

        const passwordMatch = await bcrypt.compare(password, String(user.password));

        if (!passwordMatch) {
            throw new UnauthorizedException("Email ou senha inválidos");

        }

        const payload = { sub: user.id, email: user.email, role: member.role.toUpperCase() };
        const token = await this.jwtService.signAsync(payload)
        return { token: token, role: member.role.toUpperCase() }
    }

    async signUp(
        email: string,
        password: string,
        name: string,
        role?: string,
        curriculum?: string,
    ) {
        if (!email || !password) {
            throw new Error("Email e senha são obrigatórios");
        }

        if (!name) {
            throw new Error("Nome do membro é obrigatório");
        }

        const userExists = await this.prisma.user.findUnique({
            where: { email },
        });

        if (userExists) {
            throw new Error("Usuário já existe");
        }

        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);

        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                membro: {
                    create: {
                        name,
                        role: role ?? "aluno",
                        curriculum: curriculum ?? null,
                    },
                },
            },
            select: {
                id: true,
                email: true,
                membro: {
                    select: {
                        id: true,
                        name: true,
                        role: true,
                        curriculum: true,
                    },
                },
            },
        })

        return {
            id: user.id,
            email: user.email,
            membro: user.membro,
        };
    }
}