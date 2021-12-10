import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';

@Injectable()
export class SpeciesService {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateSpeciesDto) {
    return this.prisma.species.create({ data });
  }

  findAll() {
    return this.prisma.species.findMany();
  }

  findOne(id: string) {
    return this.prisma.species.findUnique({
      where: { species_id: id },
    });
  }

  update(id: string, data: UpdateSpeciesDto) {
    return this.prisma.species.update({
      where: { species_id: id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.species.delete({
      where: { species_id: id },
    });
  }
}
