import { Router } from 'express';
import { listAll, create } from '../controller/user.js';
export const user = Router();
user.get('/list', listAll);
user.post('/create', create);
