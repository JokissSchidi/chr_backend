import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultations } from 'src/users/entities/consultation.entity';
import { ConsultationController } from './consultation.controller';
import { ConsultationService } from './consultation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Consultations])],
  controllers: [ConsultationController],
  providers: [ConsultationService],
})
export class ConsultationModule {}
