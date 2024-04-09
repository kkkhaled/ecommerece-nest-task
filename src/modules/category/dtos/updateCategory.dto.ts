import { Expose } from 'class-transformer';

export class UpdateCategoryDto {
  @Expose()
  title: string;
}
