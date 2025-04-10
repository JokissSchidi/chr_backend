import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HospitalisationService } from './hospitalisation.service';

@ApiTags('hospitalisation')
@Controller('hospitalisation')
export class HospitalisationController {
    constructor(private readonly hospitalisationService: HospitalisationService) { }


    @Get()
    @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    findAll() {
        return this.hospitalisationService.findAll();
    }

    @Get()
    getHello(): string {
        return this.hospitalisationService.getHello();
    }
}
