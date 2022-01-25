import { registerAs } from '@nestjs/config';

export default registerAs('', () => ({
  NODE_ENV: process.env.NODE_ENV,
  NODE_PORT: process.env.NODE_PORT,
}));
