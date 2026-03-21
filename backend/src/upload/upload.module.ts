import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { PrismaService } from '../prisma/prisma.service';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
    imports: [
        MulterModule.register({
            storage: memoryStorage(),
            limits: {
                fileSize: 5 * 1024 * 1024, // 5MB
            },
        }),
    ],
    controllers: [UploadController],
    providers: [UploadService, PrismaService],
})
export class UploadModule { }
