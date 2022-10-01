import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).send({ erro: 'Token não enviado.' });
  }

  const parts = header.split(' ');
  if (parts.length !== 2) {
    return res.status(401).send({ erro });
  }

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ erro: 'Token mal formatado.' });
  }

  jwt.verify(token, process.env.SECRET || '', async (erro, decoded) => {
    if (erro) {
      return res.status(401).send({ erro: 'Token inválido.' });
    }
    if (!decoded) throw new Error('Token inválido');
    if (typeof decoded === 'string') throw new Error('Token inválido');
    req.userId = decoded.id;
    req.userNickName = decoded.nickName;
    return next();
  });
};
