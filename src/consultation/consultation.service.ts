import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultations } from 'src/users/entities/consultation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultationService {

      constructor(@InjectRepository(Consultations) private consultationRepository: Repository<Consultations>,
      ) {}
      create() {
        return this.consultationRepository.find();
      }


    findAll() {
        return `This action returns all users`;
    }

    getHello(): string {
        return '!';
    }

}
