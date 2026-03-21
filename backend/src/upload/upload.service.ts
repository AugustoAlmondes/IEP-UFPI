import { Injectable, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { randomUUID } from 'crypto';
import { extname } from 'path';

@Injectable()
export class UploadService {
    private supabase: SupabaseClient;

    constructor() {
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_KEY;

        if (!supabaseUrl || !supabaseKey) {
            throw new InternalServerErrorException(
                'Configuração do Supabase ausente (SUPABASE_URL ou SUPABASE_KEY).',
            );
        }

        this.supabase = createClient(supabaseUrl, supabaseKey);
    }

    getPublicUrl(filename: string): string {
        // Se já for uma URL completa, retorna ela mesma
        if (filename.startsWith('http')) {
            return filename;
        }
        
        // Esta parte era usada para uploads locais, agora que migramos 100% para Supabase,
        // esperamos sempre receber caminhos que correspondam ao Supabase ou URLs completas.
        const { data } = this.supabase.storage
            .from('users_profile')
            .getPublicUrl(filename);

        return data.publicUrl;
    }

    async uploadToSupabase(file: Express.Multer.File, folder = 'public'): Promise<string> {
        this.validateFile(file);

        const fileExt = extname(file.originalname);
        const filename = `${folder}/${randomUUID()}${fileExt}`;

        const { error } = await this.supabase.storage
            .from('users_profile')
            .upload(filename, file.buffer, {
                contentType: file.mimetype,
                upsert: true,
            });

        if (error) {
            throw new BadRequestException(`Erro no upload para Supabase: ${error.message}`);
        }

        const { data } = this.supabase.storage
            .from('users_profile')
            .getPublicUrl(filename);

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
