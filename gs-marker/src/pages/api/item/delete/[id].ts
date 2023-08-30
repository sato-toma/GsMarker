import { NextApiRequest, NextApiResponse } from 'next';
import auth from './../../../../dbutils/auth';
import { DBCommon, Item } from 'dbutils/database';

const deleteItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    console.log(req.query.id);
    const item_table = 'ItemTable';
    console.log('prepare deleteItem');
    
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

    if (rows.length != 1) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    rows.forEach((v: Item) => {
      console.log(v);
      if (v.email != req.body.email) {
        return res.status(500).json({ error: 'Internal server error' });
      }
    });

    const deleteStatement = `DELETE FROM ${item_table} WHERE id = ?`;
    await new Promise<void>((resolve, reject) => {
      db.run(deleteStatement, [req.query.id], async (err) => {
        if (err) {
          console.error('Error occurred:', err);
          res.status(500).json({ message: 'エラーが発生しました。' });
          reject(err);
        } else {
          res.status(200).json({ message: 'アイテム削除成功' });
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default auth(deleteItem);
