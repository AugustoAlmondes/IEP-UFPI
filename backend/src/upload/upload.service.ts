import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class UploadService {
    getPublicUrl(filename: string): string {
        const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:3000';
        return `${baseUrl}/uploads/${filename}`;
    }

    validateFile(file: Express.Multer.File): void {
        if (!file) {
            throw new BadRequestException('Nenhum arquivo enviado.');
        }

        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
            throw new BadRequestException(
                'Tipo de arquivo inválido. Apenas JPG, PNG, GIF e WebP são permitidos.',
            );
        }

        const maxSizeBytes = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSizeBytes) {
            throw new BadRequestException('O arquivo deve ter no máximo 5MB.');
        }
    }
}
