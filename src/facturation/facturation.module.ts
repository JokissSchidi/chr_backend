import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facturation } from 'src/users/entities/facturation.entity';
import { FacturationController } from './facturation.controller';
import { FacturationService } from './facturation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Facturation])],
  controllers: [FacturationController],
  providers: [FacturationService],
})
export class FacturationModule {}
