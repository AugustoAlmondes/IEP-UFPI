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
import { PrismaService } from 'src/prisma/prisma.service';

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
}
