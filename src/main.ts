import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import * as compression from 'compression';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

import packageJson from './common/helpers/packageJson';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    }),
  );

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Middlewares
  app.enableCors();
  app.use(compression());
  app.use(helmet());

  // Server listen
  const PORT = AppModule.PORT;
  await app.listen(PORT);
};

bootstrap();
