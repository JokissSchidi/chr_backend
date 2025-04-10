import { Module } from '@nestjs/common';
import { PharmatieController } from './pharmatie.controller';
import { PharmatieService } from './pharmatie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from 'src/users/entities/pharmatie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PharmatieController],
  providers: [PharmatieService],
})
export class PharmatieModule {}
