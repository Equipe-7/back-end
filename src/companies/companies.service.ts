import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService){}

  async create(data: Prisma.CompanyCreateInput) {
    const company = await this.prisma.company.create({ data })
    return company;
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.company.findUnique({
      where: { company_id: id}
    });
  }

  async update(id: string, data: UpdateCompanyDto) {
    const company = await this.prisma.company.update({
      where: { company_id: id},
      data,
    })
  }

  async remove(id: string) {
    return await this.prisma.company.delete({
      where: { company_id: id}
    });
  }
}
