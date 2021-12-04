import { 
  Injectable, 
  ConflictException, 
  NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from 'src/prisma.service';
import { Company, Prisma, PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CompaniesService {

  constructor(private db: PrismaClient){}

  async create(data: CreateCompanyDto): Promise<Company> {
    
    const companyExists = await this.db.company.findUnique({
      where: { company_name: data.comapany_name}  
    })
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  async remove(company_name: string) {
    return null
    }
  
}

