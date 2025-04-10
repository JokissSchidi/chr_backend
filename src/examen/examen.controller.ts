import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExamensService } from './examen.service';

@ApiTags('examens')
@Controller('examens')
export class ExamensController {
    constructor(private readonly examensService: ExamensService) { }


    @Get()
    @ApiOperation({ summary: 'Récupère tous les utilisateurs' })
    @ApiResponse({ status: 200, description: 'Liste des utilisateurs' })
    findAll() {
        return this.examensService.findAll();
    }

    @Get()
    getHello(): string {
        return this.examensService.getHello();
    }
}
