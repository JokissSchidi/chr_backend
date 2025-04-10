import { Controller, Get } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('patients')
@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) { }


    @Get()
    @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    findAll() {
        return this.patientsService.findAll();
    }

    @Get()
    getHello(): string {
        return this.patientsService.getHello();
    }
}
