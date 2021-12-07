import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ProductCreateInput) {
    const product = await this.prisma.product.create({ data });

    return product;
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: { product_id: id },
    });
  }

  async update(id: string, data: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { product_id: id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.product.delete({
      where: { product_id: id },
    });
  }
}
