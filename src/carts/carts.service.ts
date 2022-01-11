import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartsService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateCartDto) {
    return this.prisma.cart.create({ data });
  }

  findAll() {
    return this.prisma.cart.findMany();
  }

  findOne(id: string) {
    return this.prisma.cart.findUnique({
      where: {
        cart_id: id,
      },
    });
  }

  update(id: string, data: UpdateCartDto) {
    return this.prisma.cart.update({
      data,
      where: {
        cart_id: id,
      },
    });
  }

  remove(id: string) {
    return this.prisma.cart.delete({
      where: {
        cart_id: id,
      },
    });
  }
}
