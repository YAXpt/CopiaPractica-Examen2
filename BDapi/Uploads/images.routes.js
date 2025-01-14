import { Router } from 'express';
import { imageController } from './images.controller.js';

const imagesRouter = Router();

imagesRouter.get('/:type/:image', imageController.imageController);

export { imagesRouter };