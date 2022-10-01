import { Router } from 'express';
import { listAll, create } from '../controller/user.js';
import { auth } from '../middleware/auth.js';

export const user = Router();

user.get('/list', auth, listAll);
user.post('/create', create);
