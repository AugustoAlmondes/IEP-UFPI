import { Module } from '@nestjs/common';
import { MembrosController } from './membros.controller';
import { MembrosService } from './membros.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers: [MembrosController],
    providers: [MembrosService, PrismaService],
})
export class MembrosModule { }
