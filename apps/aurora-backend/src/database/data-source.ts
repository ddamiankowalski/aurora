import { DataSource } from 'typeorm';
import { User } from './entity/user';

import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
