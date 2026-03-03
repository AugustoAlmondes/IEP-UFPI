import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "src/dto/login.dto";
import { SignupDto } from "src/dto/signup.dto";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto.email, dto.password);
    }

    @Post("signup")
    async signup(@Body() dto: SignupDto) {
        return this.authService.signup(dto.email, dto.password);
    }
}