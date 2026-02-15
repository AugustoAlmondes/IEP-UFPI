import { IsEmail, IsNotEmpty } from "class-validator";

export class SignUpDTO {
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: string;
}

export class SignInDTO {
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    role: string;
}