import { Module } from '@nestjs/common';
import { BoletinsService } from './boletins.service';
import { BoletinsController } from './boletins.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [BoletinsController],
    providers: [BoletinsService, PrismaService],
})
export class BoletinsModule { }
