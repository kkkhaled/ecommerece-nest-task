import { CreateProductHandler } from './createProduct.command.handler';
import { DeleteProductHandler } from './deleteProduct.command.handler';
import { UpdateProductHandler } from './updateProduct.command.handler';
import { UpdateProductImageHandler } from './updateProductImage.command.handler';

export const CommandHandlers = [
  CreateProductHandler,
  UpdateProductHandler,
  UpdateProductImageHandler,
  DeleteProductHandler,
];
