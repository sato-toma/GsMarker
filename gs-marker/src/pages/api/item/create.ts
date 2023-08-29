import { NextApiRequest, NextApiResponse } from 'next';
import auth from './../../../dbutils/auth';
import { DBCommon } from 'dbutils/database';

const createItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();

    const item_table = 'ItemTable';

    console.log(`
     req.body.title:${req.body.title}
     req.body.image:${req.body.image}
     req.body.price:${req.body.price}
     req.body.description:${req.body.description}
     req.body.email:${req.body.email}
     `);

    const insertStatement = `INSERT INTO ${item_table}(title, image, price, description, email) VALUES(?, ?, ?, ?, ?)`;
    await new Promise<void>((resolve, reject) => {
      db.run(
        insertStatement,
        [req.body.title, req.body.image, req.body.price, req.body.description, req.body.email],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        },
      );
    });

    res.status(200).json({ message: 'アイテム作成' });
    await new Promise<void>((resolve, reject) => {
      db.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default auth(createItem);
