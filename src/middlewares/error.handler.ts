import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      ok: false,
      error: err.flatten(),
      data: null,
    });
  } else {
    return res.status(500).json({
      ok: false,
      error: 'Error interno del servidor',
      data: null,
    });
  }
};
