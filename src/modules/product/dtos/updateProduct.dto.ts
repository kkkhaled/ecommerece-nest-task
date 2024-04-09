// update-product.dto.ts
import { Expose } from 'class-transformer';

export class UpdateProductDto {
  @Expose()
  title?: string;

  @Expose()
  description?: string;

  @Expose()
  price?: number;

  @Expose()
  stockQuantity?: number;

  @Expose()
  category?: string;
}
