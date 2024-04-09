import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, maxlength:32 })
  title: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);