import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Examens } from 'src/users/entities/examens.entity';
import { ExamensController } from './examen.controller';
import { ExamensService } from './examen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Examens])],
  controllers: [ExamensController],
  providers: [ExamensService],
})
export class ExamensModule {}
