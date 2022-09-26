import { Router } from 'express';
import { products } from './products.js';
import { session } from './session.js';
import { user } from './user.js';

export const routeIndex = Router();
routeIndex.use('/products', products);
routeIndex.use('/session', session);
routeIndex.use('/user', user);
