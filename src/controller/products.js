import { list } from '../repositories/product.js';
import { createProduct } from '../service/products/create.js';

export async function listAll(req, res) {
  const response = await list();
  return res.status(200).json(response);
}

export async function create(req, res) {
  const response = await createProduct(req.body);
  return res.status(200).json(response);
}
