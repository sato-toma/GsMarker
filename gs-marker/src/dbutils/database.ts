import * as path from 'path';
import { Database } from 'sqlite3';

export class DBCommon {
  private static _database: Database;
  private constructor() {}

  public static async instance(): Promise<Database> {
    if (!this._database) {
      // const database = new Database(':memory:');
      this._database = new Database(`${path.resolve()}\\test.db`);
      const sample_table = 'SampleTable';

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS ${sample_table} (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        image TEXT,
        price TEXT,
        description TEXT,
        email TEXT
        )
      `;
      await new Promise<void>((resolve, reject) => {
        this._database.run(createTableQuery, (err) => {
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

export type User = {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
  email: string;
};
