import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCategoryCommand } from '../commands';
import { CategoryRepoSitrey } from '../category.repositery';

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryHandler
  implements ICommandHandler<DeleteCategoryCommand>
{
  constructor(private readonly repository: CategoryRepoSitrey) {}

  async execute(command: DeleteCategoryCommand) {
    const { id } = command;
    return this.repository.deleteCategory(id);
  }
}
