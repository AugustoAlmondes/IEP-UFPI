import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { Pool } from "pg";
import "dotenv/config";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        // process.env.DATABASE_URL is now populated by dotenv
        const pool = new Pool({ connectionString: process.env.DATABASE_URL });
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }

    async onModuleInit() {
        await this.$connect();
    }
}