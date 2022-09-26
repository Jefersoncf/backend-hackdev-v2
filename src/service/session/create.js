import { getUserByLogin } from '../../repositories/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function createSession(dataLogin) {
  const { login, password } = dataLogin;

  if (!login && !password) throw new Error('Login ou senha inválido');

  const user = await getUserByLogin(login);
  if (!user) throw new Error('Login ou senha inválido');
  if (!(await bcrypt.compare(password, user.password)))
    throw new Error('Login ou senha inválido');

  const token = generateToken({ id: user.id, nickName: user.nickName });
  return { nickName: user.nickName, token };
}

function generateToken(params = {}) {
  if (!process.env.SECRET_KEY) throw new Error('Env não configurado!');
  return jwt.sign(params, process.env.SECRET_KEY, { expiresIn: 86400 });
}
