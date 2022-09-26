import { Router } from 'express';
import { createSession } from '../controller/session';

export const session = Router();
session.post('/login', createSession());

session.get('/auth', _, (req, res) => {
  res.json({ auth: true });
});
