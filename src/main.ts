import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const options = new DocumentBuilder()
      .setTitle('CHR')
      .setDescription('This is the API of project')
      .addTag('CHR')
      .setVersion(pkg.version)
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document);// Swagger accessible à /api

  

  app.enableCors ();
  await app.listen(3000, function() {
    console.log('Listening to port:  ' + 3000);
  })
}
bootstrap();
