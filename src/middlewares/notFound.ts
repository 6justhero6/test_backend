import {NextFunction, Request, Response} from 'express';
import { HttpError } from '../lib/HttpError';

export function notFound(req: Request, res: Response, next: NextFunction) {
  next(new HttpError(404))
}