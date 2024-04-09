import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCategoryCommand } from '../commands/createCategory.command';
import { CategoryRepoSitrey } from '../category.repositery';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler
  implements ICommandHandler<CreateCategoryCommand>
{
  constructor(private readonly repository: CategoryRepoSitrey) {}

  async execute(command: CreateCategoryCommand) {
    return this.repository.createCategory(command.title);
  }
}
