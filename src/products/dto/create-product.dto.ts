import { IsString, IsNumber } from 'class-validator';

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
