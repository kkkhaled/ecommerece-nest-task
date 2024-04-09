import { Expose } from 'class-transformer';

export class CreateProductDto {
  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  price: number;

  @Expose()
  stockQuantity: number;

  @Expose()
  category: string;
}
