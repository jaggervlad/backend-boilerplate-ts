import { IUserCreate, LoginResponse, User } from './user.schema';

export interface UserRespository {
  getAll(): Promise<User[]>;
  getById(id: string | number): Promise<User | null>;

  create(payload: IUserCreate): Promise<void>;
  updateById(id: string | number, payload: Partial<IUserCreate>): Promise<void>;
  deleteById(id: string | number): Promise<void>;

  login(email: string, password: string): Promise<LoginResponse>;
}
