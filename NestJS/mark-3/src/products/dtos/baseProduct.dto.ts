import { IsEnum, IsMongoId, IsNumber, IsString } from "class-validator";
import { Category } from "../enums/category.enum";

export class BaseProductDto {
  @IsMongoId()
  id?: string;

  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsEnum(Category)
  category: Category;
}
