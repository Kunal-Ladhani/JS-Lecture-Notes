import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/products/products.module';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

config({ path: `config.env` });
const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: 'config.env',
    //   isGlobal: true
    // }),
    MongooseModule.forRoot(MONGO_URI),
    ProductModule],
})
export class AppModule { }
