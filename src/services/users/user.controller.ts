import { NextFunction, Request, Response } from 'express';

import { UserRespository } from './user.respository';
import {
  validateLoginInput,
  validatePartialUserInput,
  validateUserInput,
} from './user.schema';
import { UserMongoRepository } from './user.mongo.repository';
import {
  clearLoginAttemtps,
  incrementLoginAttemtps,
} from '../../middlewares/login-attemtps';

export class UserController {
  constructor(private userRespository: UserRespository) {
    this.userRespository = userRespository;
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userRespository.getAll();

      return res.status(200).json({
        ok: true,
        error: null,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const user = await this.userRespository.getById(id);

      return res.status(200).json({
        ok: true,
        error: null,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const data = await validateUserInput(body);

      await this.userRespository.create(data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Usuario creado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const body = req.body;

      const data = await validatePartialUserInput(body);

      await this.userRespository.updateById(id, data);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Editado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await this.userRespository.deleteById(id);

      return res.status(200).json({
        ok: true,
        error: null,
        data: 'Usuario eliminado correctamente',
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = await validateLoginInput(req.body);

      const loginResponse = await this.userRespository.login(email, password);

      clearLoginAttemtps(email);

      return res.status(200).json({
        ok: true,
        error: null,
        data: loginResponse,
      });
    } catch (error) {
      incrementLoginAttemtps(req.body.email);
      next(error);
    }
  };
}

const userRespository = new UserMongoRepository();

export const userController = new UserController(userRespository);
