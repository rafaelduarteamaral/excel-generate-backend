import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

const secret = 'mysecret';

// função que verifica se o JWT é ok
function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: 'Token não informado.' });
  }

  jwt.verify(token, secret, function (err: any, decoded: any) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Token inválido.' });
    }

    req.userId = decoded.id;
    next();
  });
}

export default verifyJWT;
