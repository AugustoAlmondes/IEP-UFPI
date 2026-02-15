import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL
        })
        super({ adapter })
    }
    async onModuleInit() {
        try {
            await this.$connect();
        } catch (error) {
            console.log("DEU ERRO NA CONEXÃO:", error);
        }
    }
}
