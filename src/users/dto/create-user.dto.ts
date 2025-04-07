import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 20)
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    @Length(10, 20)
    lastName: string;
}
