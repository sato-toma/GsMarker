import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon, Item } from 'dbutils/database';

const getSingleItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    console.log(req.query.id);
    const item_table = 'ItemTable';

    const selectStatement = `SELECT * FROM ${item_table} WHERE id = ?`;
    const rows: Array<Item> = await new Promise((resolve, reject) => {
      db.all(selectStatement, [req.query.id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const itemRows: Array<Item> = rows as Array<Item>;
          resolve(itemRows);
        }
      });
    });

    rows.forEach((v: Item) => console.log(v));
    res.status(200).json({ message: 'アイテム読み取り成功(single)', singleitem: rows });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default getSingleItem;
