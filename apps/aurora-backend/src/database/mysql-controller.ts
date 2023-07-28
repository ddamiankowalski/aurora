import mysql from 'mysql';
import 'dotenv/config';

export class MySqlController {
  private static _controller: MySqlController | null = null;

  private _connection: mysql.Connection | null = null;

  public static getInstance(): MySqlController {
    if (!this._controller) {
      this._controller = new MySqlController();
    }

    return this._controller;
  }

  public query(sql: string): Promise<any> {
    this._connection = this.createDBConnection();
    const queryPromise = new Promise((resolve, reject) => {
      this._connection.query(sql, (error, rows, fields) => {
        if (error) {
          reject(error);
        }

        resolve([rows, fields]);
      });
    });

    this._connection.end();
    return queryPromise;
  }

  private createDBConnection(): mysql.Connection {
    return mysql.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE_NAME,
    });
  }
}
