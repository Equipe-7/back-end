import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { threadId } from 'worker_threads';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateServiceDto) {
    const service = await this.prisma.services.create({ data })
    return service;
  }

  async findAll() {
    const service = await this.prisma.services.findMany()
    return service;
  }

  async findOne(id: string) {
    const service = await this.prisma.services.findUnique({
      where: { service_id: id }
    })
    return service;
  }

  async update(id: string, data: UpdateServiceDto) {
    const service = await this.prisma.services.update({
      where: { service_id: id}, 
      data,
    })
    return service;
  }

  async remove(id: string) {
    const service = await this.prisma.services.delete({
      where: { service_id: id }
    })
    return service;
  }
}
