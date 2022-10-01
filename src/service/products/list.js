import { list } from '../../repositories/product.js';

export async function listAll() {
  const products = await list();
  return products;
}
