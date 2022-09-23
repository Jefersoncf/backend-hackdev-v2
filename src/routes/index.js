import { Router } from 'express';
import { products } from './products.js';

export const routeIndex = Router();
routeIndex.use('/products', products);
