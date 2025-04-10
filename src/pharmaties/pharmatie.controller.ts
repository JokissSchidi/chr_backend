
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PharmatieService } from './pharmatie.service';


@ApiTags('pharmatie')
@Controller('pharmatie')
export class PharmatieController {
  constructor(private readonly photoService: PharmatieService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
    dest: './uploads/photos',
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.photoService.savePhoto(file);
    }
}