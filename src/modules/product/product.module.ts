import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { Product, ProductSchema } from 'src/schema/product.schema';
import { ProductRepository } from './product.repositery';
import { CommandHandlers } from './commandsHandlers';
import { QueryHandlers } from '../product/queries/index';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    CqrsModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            file.fieldname +
              '-' +
              uniqueSuffix +
              '.' +
              file.originalname.split('.').pop(),
          );
        },
      }),
    }),
  ],
  controllers: [ProductController],
  providers: [ProductRepository, ...CommandHandlers, ...QueryHandlers],
})
export class ProductModule {}
