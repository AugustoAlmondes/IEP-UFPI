import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
    UseGuards,
    BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @UseGuards(AuthGuard)
    @Post('profile-image')
    @UseInterceptors(FileInterceptor('file'))
    uploadProfileImage(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Nenhum arquivo enviado.');
        }

        this.uploadService.validateFile(file);

        const url = this.uploadService.getPublicUrl(file.filename);
        return { url };
    }
}
