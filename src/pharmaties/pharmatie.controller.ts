
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PharmatieService } from './pharmatie.service';


@ApiTags('pharmatie')
@Controller('api/pharmatie')
export class PharmatieController {
  constructor(private readonly photoService: PharmatieService) { }

  @Post('upload')
  @ApiOperation({ summary: 'Scarner l`ordonnance' })
  @ApiResponse({ status: 200, description: 'Ordonnance a scanner' })
  @UseInterceptors(FileInterceptor('file', {
    dest: './uploads/photos',
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.photoService.savePhoto(file);
  }
}