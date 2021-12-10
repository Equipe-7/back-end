import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Injectable()
export class DonorsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateDonorDto) {
    return this.prisma.donor.create({ data });
  }

  findAll() {
    return this.prisma.donor.findMany();
  }

  findOne(id: string) {
    return this.prisma.donor.findUnique({
      where: { donor_id: id },
    });
  }

  update(id: string, data: UpdateDonorDto) {
    return this.prisma.donor.update({
      where: { donor_id: id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.donor.delete({
      where: { donor_id: id },
    });
  }
}
