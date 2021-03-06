import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';
import { CategoriesModule } from './categories/categories.module';
import { ServicesModule } from './services/services.module';
import { VetsModule } from './vets/vets.module';
import { DonorsModule } from './donors/donors.module';
import { SpeciesModule } from './species/species.module';
import { AuthModule } from './auth/auth.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [UsersModule, ProductsModule, CompaniesModule, CategoriesModule, ServicesModule, VetsModule, SpeciesModule, DonorsModule, AuthModule, CartsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
