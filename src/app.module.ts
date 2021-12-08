import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';
import { CategoriesModule } from './categories/categories.module';
import { ServicesModule } from './services/services.module';
import { VetsModule } from './vets/vets.module';

@Module({
  imports: [UsersModule, ProductsModule, CompaniesModule, CategoriesModule, ServicesModule, VetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
