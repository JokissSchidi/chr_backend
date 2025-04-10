import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Examens } from 'src/users/entities/examens.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamensService {

      constructor(@InjectRepository(Examens) private examensRepository: Repository<Examens>,
      ) {}
      create() {
        return this.examensRepository.find();
      }


    findAll() {
        return `This action returns all users`;
    }

    getHello(): string {
        return '!';
    }

}
