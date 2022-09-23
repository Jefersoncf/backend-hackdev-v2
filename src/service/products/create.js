import { create } from '../../repositories/product.js';
export async function createProduct(body) {
  const product = await create(body);
  return product;
}
