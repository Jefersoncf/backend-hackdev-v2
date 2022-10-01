import { Router } from 'express';
import { createSession } from '../controller/session.js';
import { auth } from '../middleware/auth.js';

export const session = Router();
session.post('/login', createSession);

session.get('/auth', auth, (req, res) => {
  res.json({ auth: true });
});
