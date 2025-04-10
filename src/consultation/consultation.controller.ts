import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConsultationService } from './consultation.service';

@ApiTags('consultation')
@Controller('consultation')
export class ConsultationController {
    constructor(private readonly consultationService: ConsultationService) { }


    @Get()
    @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    findAll() {
        return this.consultationService.findAll();
    }

    @Get()
    getHello(): string {
        return this.consultationService.getHello();
    }
}
