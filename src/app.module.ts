import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category/category.module';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/uploads', // URL path where the files will be served
      rootPath: join(__dirname, '..', 'uploads'), // Directory path where the files are located
      serveStaticOptions: {
        index: false, // Disable index.html lookup
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CategoryModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
