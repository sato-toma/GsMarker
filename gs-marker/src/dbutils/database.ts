import * as path from 'path';
import { Database } from 'sqlite3';

export class DBCommon {
  private static _database: Database;
  private constructor() {}

  public static async instance(): Promise<Database> {
    if (!this._database) {
      // const database = new Database(':memory:');
      this._database = new Database(`${path.resolve()}\\test.db`);
      const item_table = 'ItemTable';

      const createItemTableQuery = `
        CREATE TABLE IF NOT EXISTS ${item_table} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        image TEXT,
        price TEXT,
        description TEXT,
        email TEXT
        )
      `;
      await new Promise<void>((resolve, reject) => {
        this._database.run(createItemTableQuery, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });

      const user_table = 'UserTable';

      const createUserTableQuery = `
        CREATE TABLE IF NOT EXISTS ${user_table} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
        )
      `;
      await new Promise<void>((resolve, reject) => {
        this._database.run(createUserTableQuery, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
    return this._database;
  }
}

export type Item = {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  email: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};
