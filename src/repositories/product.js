import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function create(data) {
  const product = await prisma.product.create({ data });
  return product;
}

export async function list() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      price: true,
      size: true,
      percent: true,
      discount: true,
      details: true,
    },
  });
  return products;
}
