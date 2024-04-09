import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands';
import { ProductRepository } from '../product.repositery';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand) {
    return await this.productRepository.create(
      command.title,
      command.description,
      command.image,
      command.category,
      command.price,
      command.stockQuantity,
    );
  }
}
