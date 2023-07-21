import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../service';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    private signup(): string {
        return this.authService.signup();
    }

    @Post('/signin')
    private signin(): string {
        return this.authService.login();
    }
}
