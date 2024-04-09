import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../product.repositery';
import { DeleteProductCommand } from '../commands';

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
  implements ICommandHandler<DeleteProductCommand>
{
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: DeleteProductCommand) {
    return await this.productRepository.delete(command.productId);
  }
}
