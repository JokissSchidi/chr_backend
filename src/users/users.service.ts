import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find()
  }

  async findOne(id: string) {
    return await this.usersRepository.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = await this.usersRepository.update(id, updateUserDto)
    return updateUser;
  }

  async remove(id: string) {
    const user = await this.findOne(id)
    const names = user?.firstName
    await this.usersRepository.delete(id);

    return `This action removes a #${names} user`;
  }
}
