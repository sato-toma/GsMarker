import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon } from 'dbutils/database';

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    const user_table = 'UserTable';

    console.log(`
     req.body.name:${req.body.name}
     req.body.password:${req.body.password}
     req.body.email:${req.body.email}
    `);

    const insertStatement = `INSERT INTO ${user_table}(name, password, email) VALUES(?, ?, ?)`;
    await new Promise<void>((resolve, reject) => {
      db.run(insertStatement, [req.body.name, req.body.password, req.body.email], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    res.status(200).json({ message: 'ユーザー登録成功(' });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export default registerUser;
