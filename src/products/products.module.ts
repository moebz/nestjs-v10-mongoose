import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
// import { Product } from './entities/product.entity';
// import { BrandsController } from './controllers/brands.controller';
// import { BrandsService } from './services/brands.service';
// import { Brand } from './entities/brand.entity';
// import { CategoriesController } from './controllers/categories.controller';
// import { CategoriesService } from './services/categories.service';
// import { Category } from './entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
