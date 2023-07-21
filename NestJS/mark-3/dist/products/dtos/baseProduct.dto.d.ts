import { Category } from "../enums/category.enum";
export declare class BaseProductDto {
    id?: string;
    title: string;
    description?: string;
    price: number;
    category: Category;
}
