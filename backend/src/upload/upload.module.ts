import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: join(process.cwd(), 'uploads'),
                filename: (_req, file, callback) => {
                    const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
                    callback(null, uniqueName);
                },
            }),
            limits: {
                fileSize: 5 * 1024 * 1024, // 5MB
            },
            fileFilter: (_req, file, callback) => {
                const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                if (allowed.includes(file.mimetype)) {
                    callback(null, true);
                } else {
                    callback(new Error('Tipo de arquivo não suportado.'), false);
                }
            },
        }),
    ],
    controllers: [UploadController],
    providers: [UploadService, PrismaService],
})
export class UploadModule { }
