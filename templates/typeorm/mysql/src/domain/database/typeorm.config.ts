import 'dotenv/config';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/domain/database/migrations/*.ts'],
});
