export * from './createCategory.command';
export * from './updateCategory.command';
export * from './deleteCategory.command';

import { CreateCategoryCommand } from './createCategory.command';
import { UpdateCategoryCommand } from './updateCategory.command';
import { DeleteCategoryCommand } from './deleteCategory.command';

export const CommandHandlers = [
  CreateCategoryCommand,
  UpdateCategoryCommand,
  DeleteCategoryCommand,
];
