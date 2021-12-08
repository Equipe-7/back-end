import { IsString } from "class-validator";

export class CreateVetDto {
    @IsString()
    vet_name: string

    @IsString()
    vet_tel: string

    @IsString()
    crmv: string

}
