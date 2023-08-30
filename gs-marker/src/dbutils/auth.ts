import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
const secret_key = 'gs-maker';

const auth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
      return handler(req, res);
    }
    const token = await req.headers.authorization?.split(' ')[1];
    console.log(req.headers.authorization);

    if (!token) {
      return res.status(401).json({ message: 'トークンがありません' });
    }
  
    try {
      const decoded = jwt.verify(token, secret_key) as JwtPayload;
      console.log(decoded);

      req.body.email = decoded.email;
      return handler(req, res);
    } catch (err) {
      return res.status(401).json({ message: 'トークンが正しくないのでログインしてください' });
    }
  };
};

export default auth;
