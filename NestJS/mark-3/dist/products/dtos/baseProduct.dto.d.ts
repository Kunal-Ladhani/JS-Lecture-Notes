import { Category } from '../enums/category.enum';
export declare class BaseProductDto {
    title: string;
    description?: string;
    price: number;
    category: Category;
}
