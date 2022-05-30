import {Request, Response, NextFunction} from 'express';
import {HttpError} from '../../lib/HttpError';
import * as userService from './service.user';
import * as jwt from '../../lib/jwt';

export async function register(req: Request, res: Response, next: NextFunction) {
  const { login, password } = req.body;
  if (!login || !password) {
    return next(new HttpError(400, 'No login or password'));//TODO validator
  }
  try {
    const user = await userService.register(login, password);
    const authToken = jwt.encode({login: user.login, _id: user._id.toString()});
    return res.status(201).json({ token: authToken, login });
  } catch (ex) {
    if (ex.message.includes('duplicate')) {
      return next(new HttpError(409, 'login exists'));
    }
    return next(ex);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { login, password } = req.body;
  if (!login || !password) {
    return next(new HttpError(400, 'No login or password'));//TODO validator
  }
  try {
    const user = await userService.login(login, password);
    const authToken = jwt.encode({login: user.login, _id: user._id.toString()});
    return res.status(200).json({ token: authToken, login });
  } catch (ex) {
    return next(ex);
  }
}
