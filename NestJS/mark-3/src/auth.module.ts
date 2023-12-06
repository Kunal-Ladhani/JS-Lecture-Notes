// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { PassportModule } from '@nestjs/passport';
// import { UserModule } from '../user/user.module';
// import { LocalStrategy } from './local.strategy';
// import { JwtStrategy } from './jwt.strategy';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtModule } from '@nestjs/jwt';
// import { AuthController } from './auth.controller';

// @Module({
//     imports: [
//         UserModule,
//         PassportModule,
//         JwtModule.registerAsync({
//             imports: [ConfigModule],
//             useFactory: async (configService: ConfigService) => ({
//                 secret:  configService.get('jwt.secret'),
//                 signOptions: {
//                     expiresIn: configService.get('jwt.expiresIn'),
//                 },
//             }),
//             inject: [ConfigService],
//         }),
//     ],
//     providers: [AuthService, LocalStrategy, JwtStrategy],
//     exports: [AuthService],
//     controllers: [AuthController],
// })
// export class AuthModule {}