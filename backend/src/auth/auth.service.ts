import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

// ESSE INJECTABLE DIZ AO NEXT QUE ESSA CLASS PODE SER INJETADA EM OUTRAS CLASSES, COMO CONTROLADORES, POR EXEMPLO. AQUI VAI FICAR TODA A LÓGICA DE AUTENTICAÇÃO, COMO VER SE O USUÁRIO EXISTE, GERAR TOKENS, ETC.
@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }
    async signup(data: SignUpDTO) {
        console.log(data);

        const authAlreadyExist = await this.prisma.user.findUnique({
            where: { email: data.email }
        })

        if (authAlreadyExist) {
            throw new UnauthorizedException("Email já existe");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        const memberData: any = {
            name: data.name,
        };
        if (data.role) {
            memberData.role = data.role;
        }

        const user = await this.prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                membro: {
                    create: memberData
                }
            },
            include: {
                membro: true
            }
        });

        return {
            id: user.id,
            name: user.membro?.name,
            email: user.email,
            role: user.membro?.role,
        };
    }

    async signin(data: SignInDTO) {
        console.log(data);
        const user = await this.prisma.user.findUnique({
            where: { email: data.email },
            include: {
                membro: true
            }
        })

        if (!user) {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        const passwordMatch = await bcrypt.compare(data.password, user.password);

        if (!passwordMatch) {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        const accessToken = await this.jwtService.signAsync({
            id: user.id,
            name: user.membro?.name,
            email: user.email,
            role: user.membro?.role,
        })
        return { accessToken, };
    }

    async get() {
        return await this.prisma.user.findMany({
            include: {
                membro: true
            }
        });
    }
}
