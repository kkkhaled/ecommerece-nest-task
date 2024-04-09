import { Expose } from "class-transformer";

export class CreateCategoryDto {
  @Expose()
  title: string;
}
