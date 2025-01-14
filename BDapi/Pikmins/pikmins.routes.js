import { Router } from 'express';
import { handleGetPikmin, handleGetPikmins} from './pikmins.controllers.js';

export const pikminsRouter = Router();

pikminsRouter.get('/', handleGetPikmins);
pikminsRouter.get('/:id', handleGetPikmin);