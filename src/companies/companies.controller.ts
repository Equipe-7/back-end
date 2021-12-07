import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':company_id')
  findOne(@Param('company_id') id: string) {
    return this.companiesService.findOne(id);
  }

  @Patch(':company_id')
  update(
    @Param('ompany_id') id: string, 
    @Body() updateCompanyDto: UpdateCompanyDto
    ) {
    return this.companiesService.update(id, updateCompanyDto);
  }

  @Delete(':company_id')
  remove(@Param('company_id') id: string) {
    return this.companiesService.remove(id);
  }
}
