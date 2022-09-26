import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  if (params.model == 'User' && params.action == 'create') {
    const quantity = Math.floor(Math.random());
    params.args.data.password = await bcrypt.hash(
      params.args.data.password,
      quantity
    );
  }
  return next(params);
});

export async function getUserByLogin(login) {
  return await prisma.user.findFirst({
    where: {
      OR: [{ nickName: login }, { email: login }],
    },
  });
}

export async function create(data) {
  const user = await prisma.user.create({ data });
  return user;
}

export async function list() {
  const user = await prisma.user.findMany();
  return user;
}
