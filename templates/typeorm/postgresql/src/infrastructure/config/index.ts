import { registerAs } from '@nestjs/config';

export default registerAs('', async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  NODE_PORT: Number(process.env.NODE_PORT),
  // Database
  POSTGRES_HOST: String(process.env.POSTGRES_HOST),
  POSTGRES_PORT: Number(process.env.POSTGRES_PORT),
  POSTGRES_USERNAME: String(process.env.POSTGRES_USERNAME),
  POSTGRES_PASSWORD: String(process.env.POSTGRES_PASSWORD),
  POSTGRES_DB: String(process.env.POSTGRES_DB),
}));
