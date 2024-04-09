import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductImageCommand {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  constructor(id: string, image: string) {
    this.id = id;
    this.image = image;
  }
}
