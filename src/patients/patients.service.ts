import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePatientDto } from 'src/users/dto/create-patient.dto';
import { Patients } from 'src/users/entities/patients.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientsService {

      constructor(@InjectRepository(Patients) private patientsRepository: Repository<Patients>,
      ) {}
      create(createPatientDto: CreatePatientDto) {
        return this.patientsRepository.save(createPatientDto);
      }


    async findAll() {
        return await this.patientsRepository.find() ;
    }

    async getOne(id: number): Promise<Patients | null>  {
        return await this.patientsRepository.findOneBy({id});
    }

}
