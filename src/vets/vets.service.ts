import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';


@Injectable()
export class VetsService {
  constructor(private readonly prisma: PrismaService){}

  async create(data: Prisma.VetsCreateInput) {
    const vet = await this.prisma.vets.create({ data })
    return vet;
  }

  async findAll() {
    const vet = await this.prisma.vets.findMany()
    return vet;

  }

  async findOne(id: string) {
    const vet = await this.prisma.vets.findUnique({
      where: { vet_id: id}
    })
    return vet;
  }

  async update(id: string, data: UpdateVetDto) {
    const vet = await this.prisma.vets.update({
      where: { vet_id: id},
      data
    })
    return vet;
  }

  async remove(id: string) {
    const vet = await this.prisma.vets.delete({
      where: { vet_id: id}
    })
    return vet;
  }
}
