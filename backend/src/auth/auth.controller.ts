import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    async login(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.login(email, password);
    }

    @Post("signup")
    async signup(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.signup(email, password);
    }
}