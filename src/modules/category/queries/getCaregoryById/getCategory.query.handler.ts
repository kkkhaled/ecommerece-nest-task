import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetCategoryQuery } from './getCategory.query';
import { CategoryRepoSitrey } from '../../category.repositery';

@QueryHandler(GetCategoryQuery)
export class GetCaregoryHandler implements IQueryHandler<GetCategoryQuery> {
  constructor(private readonly categoryRepository: CategoryRepoSitrey) {}

  async execute(query: GetCategoryQuery) {
    const { categoryId } = query;
    return await this.categoryRepository.findById(categoryId);
  }
}
