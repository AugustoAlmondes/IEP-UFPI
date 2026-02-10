import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

// AQUI QUE FICA TODOS OS ENDPOINTS RELACIONADOS A AUTENTICAÇÃO, COMO SIGNUP E SIGNIN

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('signup')
    async signup(@Body() body: SignUpDTO) {

        await this.authService.signup(body);

        return "body recebido com sucesso";
    }
    
    @Post('signin') 
    async signin(@Body() body: SignInDTO) {

        await this.authService.signin(body);

        return "body recebido com sucesso";
    }
}
