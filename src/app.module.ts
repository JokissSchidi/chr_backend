import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from 'DatabaseConfig';
import { UsersModule } from './users/users.module';
import { PharmatieModule } from './pharmaties/pharmatie.module';
import { PatientsModule } from './patients/patients.module';
import { ConsultationModule } from './consultation/consultation.module';
import { FacturationModule } from './facturation/facturation.module';
import { ExamensModule } from './examen/examen.module';
import { HospitalisationModule } from './Hospitalisation/hospitalisation.module';

@Module({
  imports: [
    UsersModule,
    PharmatieModule,
    PatientsModule,
    ConsultationModule,
    FacturationModule,
    ExamensModule,
    HospitalisationModule,
    TypeOrmModule.forRoot(DatabaseConfig),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //constructor(private configService: ConfigService) {
    // Logger une variable d'environnement
   // console.log('DATABASE_HOST:', this.configService.get<string>('DATABASE_HOST'));
   // console.log('DATABASE_NAME:', this.configService.get<number>('DATABASE_NAME'));
  //}
}
