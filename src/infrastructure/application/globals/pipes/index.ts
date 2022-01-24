import { ValidationPipe } from '@nestjs/common';

export default (app) => {
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    }),
  );
};
