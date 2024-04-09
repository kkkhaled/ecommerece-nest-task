import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop({
    required: [true, 'Title is required'],
    maxlength: [32, 'Title must be at most 32 characters'],
  })
  title: string;

  @Prop({
    required: [true, 'Description is required'],
    maxlength: [128, 'Description must be at most 128 characters'],
  })
  description: string;

  @Prop({ required: [true, 'Price is required'] })
  price: number;

  @Prop({ required: [true, 'Stock quantity is required'] })
  stockQuantity: number;

  @Prop({ required: [true, 'Image is required'] })
  image: string;

  @Prop({
    type: mongoose.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Category is required'],
  })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
