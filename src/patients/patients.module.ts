import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { Patients } from 'src/users/entities/patients.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ Patients])],
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}
