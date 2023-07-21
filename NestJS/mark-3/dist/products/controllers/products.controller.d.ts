import { ProductsService } from '../services/products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    private listProducts;
    private seeOneProduct;
    private createProduct;
    private updateProduct;
    private deleteOneProduct;
}
