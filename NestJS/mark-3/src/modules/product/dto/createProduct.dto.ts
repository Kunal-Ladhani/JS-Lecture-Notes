import { IsDate } from "class-validator";
import { BaseProductDto } from "./baseProduct.dto";

export class CreateProductDto extends BaseProductDto {
  @IsDate()
  createdAt?: Date;
}
