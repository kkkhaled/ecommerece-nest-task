import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ListProductsQuery } from './listProduct.query';
import { ProductRepository } from '../../product.repositery';

@QueryHandler(ListProductsQuery)
export class ListProductsQueryHandler
  implements IQueryHandler<ListProductsQuery>
{
  constructor(private readonly repository: ProductRepository) {}

  async execute(query: ListProductsQuery) {
    return await this.repository.findAll();
  }
}
