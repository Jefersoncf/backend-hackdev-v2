import { Router } from 'express';
import { create, listProducts } from '../controller/products.js';
import { auth } from '../middleware/auth.js';
export const products = Router();

products.get('/list', listProducts);
products.post('/create', auth, create);
