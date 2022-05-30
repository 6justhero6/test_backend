import {Response, NextFunction} from 'express';
import {HttpError} from '../../lib/HttpError';
import * as slideService from './service.slide';
import {isDataASlide} from './service.slide';
import {UserRequest} from '../../lib/ExtendedRequest';

export async function create(req: UserRequest, res: Response, next: NextFunction) {
  const slideData = req.body;
  if (!isDataASlide(slideData)) {
    return next(new HttpError(400, 'Wrong slide'));//TODO validator
  }
  try {
    await slideService.create(slideData);
    return res.status(201).end();
  } catch (ex) {
    if (ex.message.includes('exists')) {
      return next(new HttpError(409, 'login exists'));
    }
    return next(ex);
  }
}

export async function getAll(req: UserRequest, res: Response) {
  res.json(await slideService.getAll());
}
