import { NestFactory } from '@nestjs/core';

import globalPipe from './globals/pipes';
import middlewares from './middlewares';
import swagger from './swagger';

export default async ({ AppModule, NODE_ENV, packageJson }) => {
  const app = await NestFactory.create(AppModule);

  // Global pipes
  globalPipe(app);

  // Middlewares
  middlewares(app, NODE_ENV);

  // Swagger config
  swagger(app, packageJson);

  // Server listen
  const PORT = AppModule.PORT;
  await app.listen(PORT);
};
