import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from 'DatabaseConfig';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
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
