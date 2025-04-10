import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalisationService } from './hospitalisation.service';
import { Hospitalisations } from 'src/users/entities/hospitalisations.entity';
import { HospitalisationController } from './hospitalisation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ Hospitalisations])],
  controllers: [HospitalisationController],
  providers: [HospitalisationService],
})
export class HospitalisationModule {}
