import { IsEmail, IsString } from 'class-validator';

export class CreateDonorDto {
  

  @IsString()
  donor_name: string;

  @IsEmail()
  @IsString()
  donor_email: string;

  @IsString()
  donor_image: string;

  @IsString()
  donor_species: string;

  @IsString()
  donor_size: string;

  @IsString()
  donor_tel: string;
}
