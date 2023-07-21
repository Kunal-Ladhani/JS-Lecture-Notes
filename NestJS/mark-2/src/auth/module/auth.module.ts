import { Module } from '@nestjs/common';
import { AuthController } from '../controller';
import { AuthService } from '../service';
import { AuthServiceImpl } from '../service/auth.service.impl';

@Module({
    controllers: [AuthController],
    providers: [{
        provide: AuthService,
        useClass: AuthServiceImpl
    }],
})
export class AuthModule { }
