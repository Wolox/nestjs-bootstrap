import { registerAs } from '@nestjs/config';

import env from 'src/common/helpers/getConfig';

export default registerAs('', () => ({
  NODE_ENV: env.NODE_ENV,
  NODE_PORT: env.NODE_PORT,
}));
