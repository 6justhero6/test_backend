import * as jwt from 'jsonwebtoken';
import {get} from "./env";

const SECRET_TOKEN = get('JWT.SECRET_TOKEN');

type JWTData = {
  login: string;
  _id: string;
}

export function encode(data: JWTData): string {
  return jwt.sign(data, SECRET_TOKEN);
}

export function decode(token: string): JWTData {
  return jwt.verify(token, SECRET_TOKEN) as JWTData;
}
