import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from "../enum/category.enum";

// DEFINE MONGODB SCHEMA ACCORDING TO NESTJS

@Schema({
  timestamps: true, // createdAt and updatedAt are automatically
})
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop()
  price?: number;

  @Prop()
  category?: Category;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

export type ProductDocument = Product & Document;
