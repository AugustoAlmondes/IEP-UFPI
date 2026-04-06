import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateBoletimDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    category?: string;

    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsOptional()
    content?: string;

    @IsString()
    @IsOptional()
    reference?: string;

    @IsString()
    @IsOptional()
    proofreader?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    legend_image?: string;

    @IsString()
    @IsOptional()
    writers?: string;
}
