import { Prisma } from '@prisma/client';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  product_name: string;

  @IsNumber()
  price: number;

  @IsString()
  description: string;

  @IsString()
  urlImage: string;
}
