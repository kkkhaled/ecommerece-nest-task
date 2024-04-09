// get-product.handler.ts
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../../product.repositery';
import { GetProductQuery } from './getProductById.query.handler';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly repository: ProductRepository) {}

  async execute(query: GetProductQuery) {
    return await this.repository.findById(query.ProductId);
  }
}
