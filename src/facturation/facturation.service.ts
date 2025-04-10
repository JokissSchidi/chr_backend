import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Facturation } from 'src/users/entities/facturation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FacturationService {

      constructor(@InjectRepository(Facturation) private facturationRepository: Repository<Facturation>,
      ) {}
      create() {
        return this.facturationRepository.find();
      }


    findAll() {
        return `This action returns all users`;
    }

    getHello(): string {
        return '!';
    }

}
