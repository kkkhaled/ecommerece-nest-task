import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../product.repositery';
import { UpdateProductCommand } from '../commands';

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler
  implements ICommandHandler<UpdateProductCommand>
{
  constructor(private readonly repository: ProductRepository) {}

  async execute(command: UpdateProductCommand) {
    return await this.repository.update(command.id, {
      title: command?.title,
      description: command?.description,
      category: command?.category,
      price: command?.price,
      stockQuantity: command?.stockQuantity,
    });
  }
}
