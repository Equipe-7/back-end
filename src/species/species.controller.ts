import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';

@Controller('species')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  create(@Body() createSpeciesDto: CreateSpeciesDto) {
    return this.speciesService.create(createSpeciesDto);
  }

  @Get()
  findAll() {
    return this.speciesService.findAll();
  }

  @Get(':species_id')
  findOne(@Param('species_id') id: string) {
    return this.speciesService.findOne(id);
  }

  @Patch(':species_id')
  update(@Param('species_id') id: string, @Body() updateSpeciesDto: UpdateSpeciesDto) {
    return this.speciesService.update(id, updateSpeciesDto);
  }

  @Delete(':species_id')
  remove(@Param('species_id') id: string) {
    return this.speciesService.remove(id);
  }
}
