import { IsAlpha, IsNumber, IsString } from "class-validator";
import { Category } from '../enums/category.enum';

export class BaseProductDto {
    @IsString()
    title: string;

    @IsString()
    description?: string;

    @IsNumber()
    price: number;

    @IsAlpha()
    category: Category;
}