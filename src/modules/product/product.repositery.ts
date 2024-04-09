// product.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessException } from 'src/helpers/businessException';
import { Product } from 'src/schema/product.schema';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findAll() {
    try {
      return await this.productModel.find();
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch products.',
        'FETCH_FAILED',
        500,
      );
    }
  }

  async findByCategory(id: string) {
    try {
      return await this.productModel.find({ category: id });
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch products.',
        'FETCH_FAILED',
        500,
      );
    }
  }

  async findById(id: string) {
    try {
      const product = await this.productModel.findById(id).exec();
      if (!product) {
        throw new BusinessException('Product not found.', 'NOT_FOUND', 404);
      } else {
        return { product };
      }
    } catch (error) {
      throw new BusinessException(
        'Failed to fetch products.',
        'FETCH_FAILED',
        500,
      );
    }
  }

  async create(
    title: string,
    description: string,
    image: string,
    category: string,
    price: number,
    stockQuantity: number,
  ): Promise<Product> {
    const createdProduct = new this.productModel({
      title,
      description,
      image,
      category,
      price,
      stockQuantity,
    });
    return await createdProduct.save();
  }

  async update(
    id: string,
    data: {
      title?: string;
      description?: string;
      image?: string;
      category?: string;
      price?: number;
      stockQuantity?: number;
    },
  ) {
    try {
      return await this.productModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    } catch (error) {
      throw new BusinessException(
        'Failed to update product.',
        'UPDATE_FAILED',
        500,
      );
    }
  }

  async updateImage(id: string, image: string) {
    try {
      return await this.productModel.findByIdAndUpdate(
        id,
        { image },
        {
          new: true,
        },
      );
    } catch (error) {
      throw new BusinessException(
        'Failed to update product_Image.',
        'UPDATE_FAILED',
        500,
      );
    }
  }

  async delete(id: string) {
    try {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new BusinessException(
          'Product not found.',
          'Product_NOT_FOUND',
          404,
        );
      }
      return 'Product Deleted Succfully !!!';
    } catch (error) {
      throw new BusinessException(
        'Failed to delete Product.',
        'DELETE_FAILED',
        500,
      );
    }
  }
}
