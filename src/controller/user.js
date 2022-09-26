import { list } from '../service/user/list.js';
import { createUser } from '../service/user/create.js';

export async function listAll() {
  const response = await list();
  return res.status(200).json(response);
}

export async function create(req, res) {
  const response = await createUser(req.body);
  return res.status(200).json(response);
}
