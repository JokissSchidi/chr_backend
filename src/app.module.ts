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
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
        APP_PORT: Joi.number().port(),
        DATABASE_TYPE: Joi.string().required(),
        DATABASE_PORT: Joi.string().required(),
        DATABASE_HOST: Joi.string().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().min(1).required(),
        DATABASE_NAME: Joi.string().required(),

      }),
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
