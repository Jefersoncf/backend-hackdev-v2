import { getUserByLogin } from '../../repositories/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AppError from '../../error/appError.js';

export async function create(dataLogin) {
  const { login, password } = dataLogin;

  if (!login && !password)
    throw new AppError({ message: 'Login ou senha inválido', statusCode: 401 });

  const user = await getUserByLogin(login);
  console.log(user);
  if (!user)
    throw new AppError({ message: 'Login ou senha inválido', statusCode: 401 });

  if (!(await bcrypt.compare(password, user.password)))
    throw new AppError({ message: 'Login ou senha inválido', statusCode: 401 });

  const token = generateToken({ id: user.id, nickName: user.nickName });
  return { nickName: user.nickName, token };
}

function generateToken(params = {}) {
  if (!process.env.SECRET_KEY)
    throw new AppError({ message: 'Env não configurado!', statusCode: 401 });
  return jwt.sign(params, process.env.SECRET_KEY, { expiresIn: 86400 });
}
