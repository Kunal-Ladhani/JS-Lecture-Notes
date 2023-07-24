import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "./modules/products/products.module";
import { ConfigModule } from "@nestjs/config";
import { config } from "dotenv";
import { configuration } from "./config/configuration";

config({ path: `config.env` });
const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: "config.env",
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot(),
    MongooseModule.forRoot(MONGO_URI),
    ProductModule,
    // AuthModule,
  ],
})
export class AppModule {}
