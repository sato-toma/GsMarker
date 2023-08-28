import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon } from 'dbutils/database';

const deleteItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    console.log(req.query.id);
    const item_table = 'ItemTable';
    console.log('prepare deleteItem');

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

export default deleteItem;
