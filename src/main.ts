import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ApiModule } from './api.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(ApiModule);

  const config = new DocumentBuilder()
    .setTitle(configService.get('API_NAME'))
    .setDescription(configService.get('API_DESCRIPTION'))
    .setVersion(configService.get('API_VERSION'))
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT'));
}

bootstrap();
