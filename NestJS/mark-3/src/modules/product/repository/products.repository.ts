import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateProductDto } from "../dto/createProduct.dto";
import { UpdateProductDto } from "../dto/updateProduct.dto";
import { Product } from "../schema/product.schema";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>
  ) {}

  async findAllProducts(): Promise<Product[]> {
    return await this.productModel.find();
  }

  async findOneProduct(id: string): Promise<Product> {
    return await this.productModel.findOne({ _id: id });
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return await new this.productModel({
      ...createProductDto,
      createdAt: new Date(),
    }).save();
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    return await this.productModel.findByIdAndUpdate(id, updateProductDto);
  }

  async deleteProduct(id: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(id);
  }
}
