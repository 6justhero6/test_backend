import {Request, Response, NextFunction} from 'express'
import { HttpError } from '../lib/HttpError';

export function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  if (!err.status || err.status >= 500) {
    console.error(err);
  }
  if (err.status) {
    return res.status(err.status).end(err.message || '');
  }
  return res.status(500).end();
}
