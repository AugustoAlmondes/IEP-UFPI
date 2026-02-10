import { Injectable } from '@nestjs/common';
import { SignInDTO, SignUpDTO } from './dtos/auth';

// ESSE INJECTABLE DIZ AO NEXT QUE ESSA CLASS PODE SER INJETADA EM OUTRAS CLASSES, COMO CONTROLADORES, POR EXEMPLO. AQUI VAI FICAR TODA A LÓGICA DE AUTENTICAÇÃO, COMO VER SE O USUÁRIO EXISTE, GERAR TOKENS, ETC.
@Injectable()
export class AuthService {
    async signup(data: SignUpDTO) {
        console.log(data);
        return "signup realizado com sucesso";
    }

    async signin(data: SignInDTO) {
        console.log(data);
        return "signin realizado com sucesso";
    }
}
