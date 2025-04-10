import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospitalisations } from 'src/users/entities/hospitalisations.entity';
import { Patients } from 'src/users/entities/patients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HospitalisationService {

      constructor(@InjectRepository(Hospitalisations) private hospitalisationsRepository: Repository<Hospitalisations>,
      ) {}
      create() {
        return this.hospitalisationsRepository.find();
      }


    findAll() {
        return `This action returns all users`;
    }

    getHello(): string {
        return '!';
    }

}
