import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon, User } from 'dbutils/database';

const getAllItems = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    const sample_table = 'SampleTable';

    const selectStatement = `SELECT * FROM ${sample_table}`;

    const rows: Array<User> = await new Promise((resolve, reject) => {
      db.all(selectStatement, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const userRows: Array<User> = rows as Array<User>;
          resolve(userRows);
        }
      });
    });

    rows.forEach((v: User) => console.log(v));

    res.status(200).json({ message: 'アイテム読み取り成功(all)', allitems: rows });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default getAllItems;
