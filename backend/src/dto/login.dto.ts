import { MinLength } from 'class-validator';
import { IsString } from 'class-validator';
import { IsEmail } from 'class-validator';


export class LoginDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;
}