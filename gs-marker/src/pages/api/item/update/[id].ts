import { NextApiRequest, NextApiResponse } from 'next';
import { DBCommon } from 'dbutils/database';

const updateItem = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = await DBCommon.instance();
    console.log(req.query.id);
    const sample_table = 'SampleTable';
    console.log('prepare updateItem');
    const updatedData = req.body;

    const updateClauses = Object.keys(updatedData)
      .map((key) => `${key} = ?`)
      .join(', ');
    const updateValues = Object.values(updatedData);
    const updateStatement = `UPDATE ${sample_table} SET ${updateClauses} WHERE id = ?`;
    updateValues.push(req.query.id);
    db.run(updateStatement, updateValues, async (err) => {
      if (err) {
        res.status(500).json({ message: 'エラーが発生しました。' });
      } else {
        res.status(200).json({ message: 'アイテム更新成功' });
      }
    });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default updateItem;
