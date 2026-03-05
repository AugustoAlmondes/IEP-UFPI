import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class SignupDto {
    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(6)
    password!: string;

    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    role?: string;

    @IsOptional()
    @IsString()
    curriculum?: string;
}
