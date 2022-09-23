import { Router } from 'express';
import { listAll, create } from '../controller/products.js';
export const products = Router();
products.get('/list', listAll);
products.post('/create', create);
