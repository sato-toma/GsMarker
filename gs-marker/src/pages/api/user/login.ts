import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon, User } from 'dbutils/database';

const secret_key = 'gs-maker';
const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    const user_table = 'UserTable';

    console.log(`
     req.body.name:${req.body.name}
     req.body.password:${req.body.password}
     req.body.email:${req.body.email}
    `);

    const selectStatement = `SELECT * FROM ${user_table} WHERE email = ?`;
    const rows: Array<User> = await new Promise((resolve, reject) => {
      db.all(selectStatement, [req.body.email], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          const itemRows: Array<User> = rows as Array<User>;
          resolve(itemRows);
        }
      });
    });
    if (rows.length === 0) {
      res.status(200).json({ message: 'ログイン失敗' });
      return;
    }

    for (const user of rows) {
      if (req.body.password != user.password) {
        res.status(200).json({ message: 'ログイン失敗' });
        continue;
      } else {
        rows.forEach((v: User) => console.log(v));
        const payload = { email: req.body.email };
        const token = jwt.sign(payload, secret_key, { expiresIn: '23h' });
        res.status(200).json({ message: 'ログイン成功', token: token });
        return;
      }
    }
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default loginUser;
