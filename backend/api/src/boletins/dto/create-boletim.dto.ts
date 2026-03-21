import { IsString, IsOptional, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBoletimDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsDateString()
    @IsOptional()
    date?: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    reference: string;

    @IsString()
    @IsNotEmpty()
    proofreader: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsString()
    @IsOptional()
    legend_image?: string;

    @IsNumber()
    @IsOptional()
    created_by_id?: number;
}
