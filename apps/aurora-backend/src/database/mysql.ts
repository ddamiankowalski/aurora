import mysql from 'mysql';
import 'dotenv/config';

export class MySqlController {
  private static _connection: mysql.Connection | null = null;

  public static getConnection(): mysql.Connection {
    if (!this._connection) {
      this._connection = this.createDBConnection();
      this._connection.connect();
    }

    return this._connection;
  }

  private static createDBConnection(): mysql.Connection {
    return mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  }
}
