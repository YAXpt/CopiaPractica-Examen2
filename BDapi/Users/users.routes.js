import { Router } from 'express';
import { handleGetUser, handleGetUsers, createUser, handleLogin, updateUserBuyed } from './users.controllers.js';

export const usersRouter = Router();

usersRouter.get('/', handleGetUsers);
usersRouter.get('/:id', handleGetUser);
usersRouter.post('/', createUser);
usersRouter.post('/login', handleLogin);
usersRouter.put('/:id/buyed', updateUserBuyed);