import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SignUpDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    role?: string;
}

export class SignInDTO {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}