import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patients } from 'src/users/entities/patients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {

      constructor(@InjectRepository(Patients) private patientsRepository: Repository<Patients>,
      ) {}
      create() {
        return this.patientsRepository.find();
      }


    findAll() {
        return `This action returns all users`;
    }

    getHello(): string {
        return '!';
    }

}
