import { Injectable, BadRequestException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class UploadService {
    private supabase: SupabaseClient;

    constructor() {
        this.supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!
        );
    }

    getPublicUrl(filename: string): string {
        // Se já for uma URL completa (ex: do Supabase ou Cloudinary), retorna ela mesma
        if (filename.startsWith('http')) {
            return filename;
        }
        const baseUrl = process.env.BACKEND_URL ?? 'http://localhost:3000';
        return `${baseUrl}/uploads/${filename}`;
    }

    async uploadToSupabase(file: Express.Multer.File, folder = 'public'): Promise<string> {
        const filename = `${Date.now()}-${file.originalname}`;
        const { error } = await this.supabase.storage
            .from('users_profile')
            .upload(`${folder}/${filename}`, file.buffer, {
                contentType: file.mimetype,
            });

        if (error) {
            throw new BadRequestException(`Erro no upload para Supabase: ${error.message}`);
        }

        const { data } = this.supabase.storage
            .from('users_profile')
            .getPublicUrl(`${folder}/${filename}`);

        return data.publicUrl;
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
