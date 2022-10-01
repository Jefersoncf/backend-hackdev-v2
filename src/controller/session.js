import { create } from '../service/session/create.js';

export async function createSession(req, res) {
  const session = await create(req.body);
  return res.json(session);
}
