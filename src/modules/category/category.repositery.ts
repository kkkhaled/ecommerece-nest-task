import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BusinessException } from 'src/helpers/businessException';
import { Category } from 'src/schema/category.schema';

@Injectable()
export class CategoryRepoSitrey {
  constructor(
    @InjectModel(Category.name)
    private readonly category: Model<Category>,
  ) {}

  async getCategories() {
    try {
      return await this.category.find().exec();
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch categories.',
        'FETCH_FAILED',
        500,
      );
    }
  }
  async findById(id: string) {
    try {
      return await this.category.findById(id);
    } catch (error) {
      throw new BusinessException(
        'Failed to find category by ID.',
        'FIND_FAILED',
        500,
      );
    }
  }
  async createCategory(title: string) {
    try {
      const createdCategory = new this.category({ title });
      return await createdCategory.save();
    } catch (error) {
      throw new BusinessException(
        'Failed to create category.',
        'CREATE_FAILED',
        500,
      );
    }
  }

  async updateCategory(categoryId: string, title: string) {
    try {
      const updatedCategory = await this.category
        .findByIdAndUpdate(categoryId, { title }, { new: true })
        .exec();
      if (!updatedCategory) {
        throw new BusinessException('Category not found.', 'NOT_FOUND', 404);
      }
      return updatedCategory;
    } catch (error) {
      throw new BusinessException(
        'Failed to update category.',
        'UPDATE_FAILED',
        500,
      );
    }
  }

  async deleteCategory(categoryId: string) {
    try {
      const deletedCategory = await this.category
        .findByIdAndDelete(categoryId)
        .exec();
      if (!deletedCategory) {
        throw new BusinessException('Category not found.', 'NOT_FOUND', 404);
      } else {
        return { message: 'Category deleted successfully.' };
      }
    } catch (error) {
      throw new BusinessException(
        'Failed to delete category.',
        'DELETE_FAILED',
        500,
      );
    }
  }
}
