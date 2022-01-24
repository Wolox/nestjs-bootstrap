import * as compression from 'compression';
import * as helmet from 'helmet';
import { json, urlencoded } from 'express';

export default (app, NODE_ENV) => {
  app.enableCors();
  app.use(compression());
  app.use(helmet());
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ limit: '10mb', extended: true }));

  if (NODE_ENV === 'aws_develop') {
    app.use(helmet.contentSecurityPolicy());
  }
};
