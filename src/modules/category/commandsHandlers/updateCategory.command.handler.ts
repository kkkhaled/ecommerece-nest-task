import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateCategoryCommand } from '../commands';
import { CategoryRepoSitrey } from '../category.repositery';

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler
  implements ICommandHandler<UpdateCategoryCommand>
{
  constructor(private readonly repository: CategoryRepoSitrey) {}

  async execute(command: UpdateCategoryCommand) {
    const { id, title } = command;
    return this.repository.updateCategory(id, title);
  }
}
