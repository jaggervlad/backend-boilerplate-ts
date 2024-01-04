import { z } from 'zod';

export const userSchema = z.object({
  name: z.string({ required_error: 'Nombre es requerido' }),
  username: z.string({ required_error: 'Nombre de usuario es requerido' }),
  email: z
    .string({ required_error: 'Correo electrónico es requerido' })
    .email(),
  password: z.string({ required_error: 'Contraseña es requerida' }),
  roles: z.array(z.enum(['admin', 'user'])).default(['user']),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Correo electrónico es requerido' })
    .email(),
  password: z.string({ required_error: 'Contraseña es requerida' }),
});

export type IUserCreate = z.infer<typeof userSchema>;

export type LoginResponse = {
  token: string;
};

export enum UserRoles {
  admin = 'admin',
  user = 'user',
}

export interface User {
  id?: string;
  name: string;
  username: string;
  email: string;
  password: string;
  roles: UserRoles[];
}

export const validateLoginInput = (body: any) => {
  return loginSchema.parseAsync(body);
};
export const validateUserInput = (body: any) => {
  return userSchema.parseAsync(body);
};

export const validatePartialUserInput = (body: any) => {
  return userSchema.partial().parseAsync(body);
};
