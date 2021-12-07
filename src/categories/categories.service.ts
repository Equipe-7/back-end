import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoryDto) {
    const category = await this.prisma.category.create({ data });

    return category;
  }

  async findAll() {
    const categories = await this.prisma.category.findMany();

    return categories;
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { category_id: id },
    });
    return category;
  }

  async update(id: string, data: UpdateCategoryDto) {
    const category = await this.prisma.category.update({
      where: { category_id: id },
      data,
    });

    return category;
  }

  async remove(id: string) {
    const category = await this.prisma.category.delete({
      where: { category_id: id },
    });
    return category;
  }
}
