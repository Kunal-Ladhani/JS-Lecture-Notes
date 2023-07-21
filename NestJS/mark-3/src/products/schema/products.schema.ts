import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Category } from '../enums/category.enum';

@Schema({
    timestamps: true    // createdAt and updatedAt are automatically 
})
export class Product {
    @Prop({ required: true })
    title: string;

    @Prop()
    description?: string;

    @Prop()
    price?: number

    @Prop()
    category?: Category;

    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;

    @Prop()
    deletedAt?: Date;
};

// mongo schema plugins how to write them

export const ProductSchema = SchemaFactory.createForClass(Product);

export type ProductDocument = Product & Document;

// DEFINE MONGODB SCHEMA ACCORDING TO NESTJS