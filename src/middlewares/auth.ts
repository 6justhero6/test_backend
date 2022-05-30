import {HttpError} from '../lib/HttpError';
import {Response, NextFunction} from 'express';
import {decode} from '../lib/jwt';
import {UserRequest} from '../lib/ExtendedRequest';
import * as User from '../components/user/user';

export async function auth(req: UserRequest, res: Response, next: NextFunction) {
  const authToken = req.headers['x-access-token'] as string;
  if (!authToken) {
    return next(new HttpError(403, 'no access token'));
  }
  try {
    const decoded = decode(authToken);
    const user = await User.Model.findOne({ _id: decoded._id }).exec();
    if (!user) {
      return next(new HttpError(401));
    }
    req.user = user;
    return next();
  } catch (ex) {
    return next(new HttpError(401, 'wrong access token'));
  }
}