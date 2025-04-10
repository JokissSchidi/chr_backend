import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FacturationService } from './facturation.service';

@ApiTags('facturation')
@Controller('facturation')
export class FacturationController {
    constructor(private readonly facturationService: FacturationService) { }


    @Get()
    @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    findAll() {
        return this.facturationService.findAll();
    }

    @Get()
    getHello(): string {
        return this.facturationService.getHello();
    }
}
