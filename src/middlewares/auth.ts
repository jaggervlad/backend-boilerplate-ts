import { NextFunction, Request, Response } from 'express';

import { JwtHandle } from './../utils/jwt.handle';
import { UserRoles } from '../services/users';

export function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const authorization = req.headers?.authorization;
  const token = authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ ok: false, error: 'No estas autorizado' });
  }

  const decodedUser = JwtHandle.verifyToken(token);

  if (!decodedUser) {
    return res.status(401).json({ ok: false, error: 'Token inválido' });
  }

  req.user = decodedUser as any;

  next();
}

export const authorizeRoles = (roles: UserRoles[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = req?.user?.roles;
    const authorized = roles.some((role) => userRoles?.includes(role));

    if (!authorized)
      return res.status(403).json({
        ok: false,
        error: 'Acceso denegado para este rol',
      });
    next();
  };
};
