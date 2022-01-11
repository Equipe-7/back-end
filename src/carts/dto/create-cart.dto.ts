import { Cart } from '@prisma/client';
import { IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  quantity: number;

  @IsNumber()
  total: number;
}
