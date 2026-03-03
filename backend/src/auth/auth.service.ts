import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) { }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error("Senha inválida");
        }

        return user;
    }

    async signup(email: string, password: string) {
        if (!email || !password) {
            throw new Error("Email e senha são obrigatórios");
        }

        const userExists = await this.prisma.user.findUnique({
            where: { email },
        });

        if (userExists) {
            throw new Error("Usuário já existe");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        })

        return {
            id: user.id,
            email: user.email,
        };
    }
}