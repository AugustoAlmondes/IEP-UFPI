import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    UseGuards,
    BadRequestException,
    Param,
    ParseIntPipe,
    NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { AuthGuard } from '../auth/auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';

@Controller('upload')
export class UploadController {
    constructor(
        private readonly uploadService: UploadService,
        private readonly prisma: PrismaService,
    ) { }

    @UseGuards(AuthGuard)
    @Post('profile-image/:id')
    @UseInterceptors(FileInterceptor('file'))
    async uploadProfileImage(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile() file: Express.Multer.File
    ) {
        if (!file) {
            throw new BadRequestException('Nenhum arquivo enviado.');
        }

        const member = await this.prisma.membros.findUnique({
            where: { id },
        });

        if (!member) {
            throw new NotFoundException('Membro não encontrado.');
        }

        this.uploadService.validateFile(file);

        const url = this.uploadService.getPublicUrl(file.filename);

        await this.prisma.membros.update({
            where: { id },
            data: { profile_image: url },
        });

        return { url };
    }

    @UseGuards(AuthGuard, AdminGuard)
    @Post('boletins-image/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: (req, file, cb) => {
                const dir = join(process.cwd(), 'uploads', 'boletins');
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                }
                cb(null, dir);
            },
            filename: (_req, file, callback) => {
                const uniqueName = `${uuidv4()}${extname(file.originalname)}`;
                callback(null, uniqueName);
            },
        }),
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: (_req, file, callback) => {
            const allowed = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (allowed.includes(file.mimetype)) {
                callback(null, true);
            } else {
                callback(new BadRequestException('Tipo de arquivo não suportado.'), false);
            }
        },
    }))
    async uploadBoletimImage(
        @Param('id', ParseIntPipe) id: number,
        @UploadedFile() file: Express.Multer.File
    ) {
        if (!file) {
            throw new BadRequestException('Nenhum arquivo enviado.');
        }

        const boletim = await this.prisma.boletins.findUnique({
            where: { id },
        });

        if (!boletim) {
            throw new NotFoundException('Boletim não encontrado.');
        }

        if (boletim.image) {
            const oldFilename = boletim.image.split('/').pop();
            if(oldFilename){
                const oldPath = join(process.cwd(), 'uploads', 'boletins', oldFilename);
                if (fs.existsSync(oldPath)) {
                    fs.unlinkSync(oldPath);
                }
            }
        }

        this.uploadService.validateFile(file);

        const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:3000';
        const url = `${baseUrl}/uploads/boletins/${file.filename}`;

        await this.prisma.boletins.update({
            where: { id },
            data: { image: url },
        });

        return { url };
    }
}
