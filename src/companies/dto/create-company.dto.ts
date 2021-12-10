import { IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  company_name: string;

  @IsString()
  cnpj: string;

  @IsString()
  hotel: string;
}
