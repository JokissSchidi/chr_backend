import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreatePatientDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    sexe: string;

    @ApiProperty()
    dateOfBirthday: Date;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    profession: string;

    @ApiProperty()
    adresse: string;

    @ApiProperty()
    emergencyContactName: string;

    @ApiProperty()
    emergencyContactPhone: string;

    @ApiProperty()
    medicalHistory: string;
}
