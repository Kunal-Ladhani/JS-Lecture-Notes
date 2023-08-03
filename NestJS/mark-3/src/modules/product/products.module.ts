import { Module } from "@nestjs/common";
import { ProductsController } from "./controller/products.controller";
import { ProductsService } from "./service/products.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schema/product.schema";
import { ProductRepository } from "./repository/products.repository";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
})
export class ProductModule {}
