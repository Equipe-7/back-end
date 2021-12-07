import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [UsersModule, ProductsModule, CompaniesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
