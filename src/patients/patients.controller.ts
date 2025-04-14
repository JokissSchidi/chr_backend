import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePatientDto } from 'src/users/dto/create-patient.dto';

@ApiTags('patients')
@Controller('api/patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) { }

    @Post()
    @ApiOperation({ summary: 'Crée un Patient' })
    @ApiResponse({ status: 200, description: 'Patient crée' })
    create(@Body() createPatientDto: CreatePatientDto) {
        return this.patientsService.create(createPatientDto);
    }

    @Get()
    @ApiOperation({ summary: 'Récupère tous les patients' })
    @ApiResponse({ status: 200, description: 'Liste de tous les patients' })
    findAll() {
        return this.patientsService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.patientsService.getOne(id);
    }
}
