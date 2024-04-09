import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCategoryDto } from './dtos/createCategory.dto';
import {
  CreateCategoryCommand,
  DeleteCategoryCommand,
  UpdateCategoryCommand,
} from './commands';
import { UpdateCategoryDto } from './dtos/updateCategory.dto';
import { GetCategoryQuery, ListCategoriessQuery } from './queries';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async listCategories() {
    const categories = await this.queryBus.execute(new ListCategoriessQuery());
    return { categories };
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    const category = await this.queryBus.execute(new GetCategoryQuery(id));
    return { category };
  }

  @Post()
  async create(@Body() data: CreateCategoryDto) {
    return this.commandBus.execute(new CreateCategoryCommand(data.title));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() UpdateCategoryDto: UpdateCategoryDto,
  ) {
    return this.commandBus.execute(
      new UpdateCategoryCommand(id, UpdateCategoryDto.title),
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteCategoryCommand(id));
  }
}
