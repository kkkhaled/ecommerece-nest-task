import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Patch,
  Param,
  Delete,
  Put,
  Get,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductDto } from './dtos/createProduct.dto';
import {
  CreateProductCommand,
  DeleteProductCommand,
  UpdateProductCommand,
  UpdateProductImageCommand,
} from './commands';
import { FileInterceptor } from '@nestjs/platform-express';
import { UpdateProductDto } from './dtos/updateProduct.dto';
import { ListProductsQuery } from './queries/listProducts';
import { GetProductQuery } from './queries/getProductById';
import { GetProductsByCategoryQuery } from './queries/getProductsByCategory/getProductsByCategorru.query';

@Controller('products')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async listProducts() {
    return this.commandBus.execute(new ListProductsQuery());
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.commandBus.execute(new GetProductQuery(id));
  }

  @Get('category/:categoryId')
  async getProductsByCategory(@Param('categoryId') categoryId: string) {
    return await this.queryBus.execute(
      new GetProductsByCategoryQuery(categoryId),
    );
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() image,
  ) {
    return await this.commandBus.execute(
      new CreateProductCommand(
        createProductDto.title,
        createProductDto.description,
        image.path,
        createProductDto.category,
        createProductDto.price,
        createProductDto.stockQuantity,
      ),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.commandBus.execute(
      new UpdateProductCommand(
        id,
        updateProductDto.title,
        updateProductDto.description,
        updateProductDto.category,
        updateProductDto.price,
        updateProductDto.stockQuantity,
      ),
    );
  }

  @Put('image/:id')
  @UseInterceptors(FileInterceptor('image'))
  async updateImage(@Param('id') id: string, @UploadedFile() image) {
    return this.commandBus.execute(new UpdateProductImageCommand(id, image));
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteProductCommand(id));
  }
}
