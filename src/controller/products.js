import { listAll } from '../service/products/list.js';
import { createProduct } from '../service/products/create.js';

export async function listProducts(req, res) {
  const response = await listAll();
  return res.status(200).json(response);
}

export async function create(req, res) {
  const response = await createProduct(req.body);
  return res.status(200).json(response);
}
