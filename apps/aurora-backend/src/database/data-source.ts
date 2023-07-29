import { DataSource } from 'typeorm';
import { User } from './entity/user';

import 'dotenv/config';

export class DBManager {
  private static _manager: DBManager | null = null;
  private _dataSource: DataSource | null = null;

  public static getInstance(): DBManager {
    if (!this._manager) {
      this._manager = new DBManager();
    }

    return this._manager;
  }

  public async createDataSource(): Promise<void> {
    this._dataSource = new DataSource({
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

    try {
      await this._dataSource.initialize();
      console.log('Successfully initialized DataSource');
    } catch (err) {
      console.log(err);
    }
  }

  get dataSource(): DataSource {
    return this._dataSource;
  }
}
