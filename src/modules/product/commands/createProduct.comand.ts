import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductCommand {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stockQuantity: number;

  constructor(
    title: string,
    description: string,
    image: string,
    category: string,
    price: number,
    stockQuantity: number,
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.category = category;
    this.price = price;
    this.stockQuantity = stockQuantity;
  }
}
