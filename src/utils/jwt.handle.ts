import { sign, verify } from 'jsonwebtoken';
import { User } from '../services/users';

const JWT_SECRET = process.env.JWT_SECRET || 'contraseña-super-segura';

export class JwtHandle {
  static generateToken(user: Partial<User>) {
    const jwt = sign(user, JWT_SECRET, {
      expiresIn: '24h',
    });

    return jwt;
  }

  static verifyToken(jwt: string) {
    return verify(jwt, JWT_SECRET);
  }
}
