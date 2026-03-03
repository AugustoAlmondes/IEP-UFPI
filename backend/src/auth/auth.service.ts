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

        const passwordMatch = await bcrypt.compare(password, String(user.password));

        if (!passwordMatch) {
            throw new UnauthorizedException("Email ou senha inválidos");

        }

        const payload = { sub: user.id, email: user.email };
        const token = await this.jwtService.signAsync(payload)
        return { token: token }
    }

    async getAll() {
        return this.prisma.user.findMany();
    }

    async signUp(email: string, password: string) {
        if (!email || !password) {
            throw new Error("Email e senha são obrigatórios");
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
            },
            select: {
                id: true,
                email: true,
            }
        })

        return {
            id: user.id,
            email: user.email,
        };
    }
}