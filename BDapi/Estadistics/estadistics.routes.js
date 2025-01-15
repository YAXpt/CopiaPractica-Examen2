import { Router } from 'express';
import { createEstadistics, handleNumberOfEstadistics, handleLastEstadistics} from './estadistics.controllers.js';

export const estadisticsRouter = Router();

estadisticsRouter.post('/', createEstadistics);
estadisticsRouter.get('/number', handleNumberOfEstadistics);
estadisticsRouter.get('/last', handleLastEstadistics);
