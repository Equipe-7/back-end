import { IsString } from 'class-validator';

export class CreateSpeciesDto {
  @IsString()
  species_name: string;
}
