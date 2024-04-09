import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../product.repositery';
import { UpdateProductImageCommand } from '../commands';

@CommandHandler(UpdateProductImageCommand)
export class UpdateProductImageHandler
  implements ICommandHandler<UpdateProductImageCommand>
{
  constructor(private readonly repository: ProductRepository) {}

  async execute(command: UpdateProductImageCommand) {
    return await this.repository.updateImage(command.id, command.image);
  }
}
