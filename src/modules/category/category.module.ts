import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CqrsModule } from '@nestjs/cqrs';
import { CategoryRepoSitrey } from './category.repositery';
import { CategoryController } from './category.controller';
import { QueryHandlers } from './queries';
import { CommandHandlers } from './commands';
import { Category, CategorySchema } from 'src/schema/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
    CqrsModule,
  ],
  providers: [CategoryRepoSitrey, ...CommandHandlers, ...QueryHandlers],
  controllers: [CategoryController],
})
export class CategoryModule {}
