import { Router } from 'express';

import { userController } from './user.controller';
import { UserRoles } from './user.schema';

import { checkLoginAttempts } from '../../middlewares/login-attemtps';
import { authorizeRoles } from '../../middlewares/auth';

export const createUserRoutes = () => {
  const router = Router();

  router.get(
    '/',
    authorizeRoles([UserRoles.admin, UserRoles.user]),
    userController.getAll
  );
  router.get('/:id', userController.getById);

  router.post('/', userController.create);
  router.put('/:id', userController.update);
  router.delete('/:id', userController.delete);

  return router;
};

export const createUserPublicRoutes = () => {
  const router = Router();

  router.post('/login', checkLoginAttempts, userController.login);
  router.post('/register', userController.create);

  return router;
};
