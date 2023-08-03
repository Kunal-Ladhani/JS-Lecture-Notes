import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "./modules/product/products.module";
import { ConfigModule } from "@nestjs/config";
import { config } from "dotenv";
import { configuration } from "./config/configuration";
import { CustomerModule } from "./modules/customer/customer.module";
import { DatabaseModule } from "./database";

config({ path: `config.env` });
const MONGO_URI = process.env.MONGO_URI;

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: "config.env",
      isGlobal: true,
    }),
    DatabaseModule,
    ProductModule,
    CustomerModule,
    MongooseModule.forRoot(MONGO_URI),
  ],
})
export class AppModule {}
// whatever dependencies we create in different modules,
// we need to declare them here, otw nest will not be able to resolve the dep.
