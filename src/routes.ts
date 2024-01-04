import { Router } from 'express';
import { createUserPublicRoutes, createUserRoutes } from './services/users';

export const publicRoutes = () => {
  const publicRouter = Router();

  publicRouter.use('/auth', createUserPublicRoutes());

  return publicRouter;
};

export const privateRoutes = () => {
  const privateRouter = Router();

  privateRouter.use('/users', createUserRoutes());

  return privateRouter;
};
