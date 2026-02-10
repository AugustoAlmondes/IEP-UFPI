import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const pool = new PrismaPg({
            connectionString: process.env.DIRECT_URL!,
        })
        super({ adapter: pool })
    }
    async onModuleInit() {
        try {
            await this.$connect();
        } catch (error) {
            console.log("DEU ERRO NA CONEXÃO:", error);
        }
    }
}
