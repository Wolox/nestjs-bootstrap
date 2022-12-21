import { registerAs } from '@nestjs/config';

export default registerAs('', async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  NODE_PORT: Number(process.env.NODE_PORT),
  // Database
  MYSQL_HOST: String(process.env.MYSQL_HOST),
  MYSQL_PORT: Number(process.env.MYSQL_PORT),
  MYSQL_USERNAME: String(process.env.MYSQL_USERNAME),
  MYSQL_PASSWORD: String(process.env.MYSQL_PASSWORD),
  MYSQL_DB: String(process.env.MYSQL_DB),
}));
