import { IsString } from 'class-validator';

export class CreateCompanyDto {
    @IsString()
    company_id: string;

    @IsString()
    company_name: string;

    @IsString()
    cnpj: string;

    @IsString()
    hotel: string;
    
    @IsString()
    products: string;
}
