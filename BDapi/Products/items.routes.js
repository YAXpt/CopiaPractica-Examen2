import { Router } from 'express';
import { handleGetProducts, handleGetProduct, updateItemStock } from './items.controllers.js';

export const productsRouter = Router();

productsRouter.get('/', handleGetProducts);
productsRouter.get('/:id', handleGetProduct);
productsRouter.put('/:id', updateItemStock); //actualizar stock


