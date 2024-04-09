import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ListCategoriessQuery } from './getCategoriesQuery';
import { CategoryRepoSitrey } from '../../category.repositery';

@QueryHandler(ListCategoriessQuery)
export class ListCategoriesHandler
  implements IQueryHandler<ListCategoriessQuery>
{
  constructor(private readonly CategoryRepository: CategoryRepoSitrey) {}

  async execute(query: ListCategoriessQuery) {
    return await this.CategoryRepository.getCategories();
  }
}
