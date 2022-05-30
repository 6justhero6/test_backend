import {Request} from 'express';
import {IUser} from '../components/user/user';

export type ExtendedRequest<T> = T & Request;

export type UserRequest = ExtendedRequest<{ user?: IUser }>;
