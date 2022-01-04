import { registerAs } from '@nestjs/config';

import env from 'src/common/helpers/getConfig';

export default registerAs('config', () => ({
  NODE_ENV: env.environment,
  NODE_PORT: env.port,
}));
