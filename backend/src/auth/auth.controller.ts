import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDto } from "../dto/signup.dto";
import { SigninDto } from "../dto/signin.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post("signin")
    async signin(@Body() dto: SigninDto) {
        return this.authService.signIn(dto.email, dto.password);
    }

    @Post("signup")
    async signup(@Body() dto: SignupDto) {
        return this.authService.signUp(
            dto.email,
            dto.password,
            dto.name,
            dto.role,
            dto.curriculum,
        );
    }
}
