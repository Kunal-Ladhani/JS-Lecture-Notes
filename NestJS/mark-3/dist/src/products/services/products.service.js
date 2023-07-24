"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../repository/products.repository");
let ProductsService = class ProductsService {
    productRepo;
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    ;
    async findAllProducts() {
        return await this.productRepo.findAllProducts();
    }
    async findOneProduct(id) {
        return await this.productRepo.findOneProduct(id);
    }
    async createProduct(createProductDto) {
        return await this.productRepo.createProduct(createProductDto);
    }
    async updateProduct(id, updateProductDto) {
        return await this.productRepo.updateProduct(id, updateProductDto);
    }
    async deleteProduct(id) {
        return await this.productRepo.deleteProduct(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map