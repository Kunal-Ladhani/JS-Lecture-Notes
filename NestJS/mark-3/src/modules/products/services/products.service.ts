import { Injectable } from '@nestjs/common';
import { Product } from '../schema/products.schema';
import { CreateProductDto } from '../dtos/createProduct.dto';
import { UpdateProductDto } from '../dtos/updateProduct.dto';
import { ProductRepository } from '../repository/products.repository';

@Injectable()
export class ProductsService {
    constructor(private readonly productRepo: ProductRepository) { };

    async findAllProducts(): Promise<Product[]> {
        return await this.productRepo.findAllProducts();
    }

    async findOneProduct(id: string): Promise<Product> {
        return await this.productRepo.findOneProduct(id);
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productRepo.createProduct(createProductDto);
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto) {
        return await this.productRepo.updateProduct(id, updateProductDto);
    }


    async deleteProduct(id: string): Promise<Product> {
        return await this.productRepo.deleteProduct(id);
    }
}
