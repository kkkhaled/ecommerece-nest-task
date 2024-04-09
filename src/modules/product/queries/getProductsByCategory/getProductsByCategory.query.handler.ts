// get-products-by-category.handler.ts
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../../product.repositery';
import { GetProductsByCategoryQuery } from './getProductsByCategorru.query';

@QueryHandler(GetProductsByCategoryQuery)
export class GetProductsByCategoryHandler
  implements IQueryHandler<GetProductsByCategoryQuery>
{
  constructor(private readonly repository: ProductRepository) {}

  async execute(query: GetProductsByCategoryQuery) {
    // return await this.repository.getProductsByCategory(query.categoryId);
  }
}
