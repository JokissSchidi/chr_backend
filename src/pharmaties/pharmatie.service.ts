import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from 'src/users/entities/pharmatie.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PharmatieService {
  constructor(@InjectRepository(Photo) private PharmatieRepository: Repository<Photo>,
  ) {}
  async savePhoto(file: Express.Multer.File): Promise<Photo> {
    const photo = new Photo();
    photo.filename = file.originalname;
    photo.path = file.path;
    photo.mimetype = file.mimetype;
    photo.size = file.size;
  
    return this.PharmatieRepository.save(photo);
  }
  
}
