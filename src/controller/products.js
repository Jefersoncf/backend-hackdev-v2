import { createProduct } from '../service/products/create.js';
export async function listAll(req, res) {
  return res.json({ id: 1, name: 'Sapato' });
}

export async function create(req, res) {
  const response = await createProduct(req.body);
  return res.status(200).json(response);
}
