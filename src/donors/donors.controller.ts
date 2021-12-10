import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonorsService } from './donors.service';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';

@Controller('donors')
export class DonorsController {
  constructor(private readonly donorsService: DonorsService) {}

  @Post()
  create(@Body() createDonorDto: CreateDonorDto) {
    return this.donorsService.create(createDonorDto);
  }

  @Get()
  findAll() {
    return this.donorsService.findAll();
  }

  @Get(':donor_id')
  findOne(@Param('donor_id') id: string) {
    return this.donorsService.findOne(id);
  }

  @Patch(':donor_id')
  update(@Param('donor_id') id: string, @Body() updateDonorDto: UpdateDonorDto) {
    return this.donorsService.update(id, updateDonorDto);
  }

  @Delete(':donor_id')
  remove(@Param('donor_id') id: string) {
    return this.donorsService.remove(id);
  }
}
