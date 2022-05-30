import * as User from './user';
import {makePasswordHash, validate} from '../../lib/password';
import {HttpError} from '../../lib/HttpError';

export async function register(login: string, password: string): Promise<User.IUser> {
  const passwordHash = await makePasswordHash(password);
  return await User.Model.create({
    login,
    passwordHash,
  });
}

export async function login(login: string, password: string): Promise<User.IUser> {
  const user = await User.Model.findOne({ login }).exec();
  if (!user) {
    throw new HttpError(404, 'user not found');
  }
  if (!await validate(password, user.passwordHash)) {
    throw new HttpError(403, 'forbidden');
  }
  return user;
}
