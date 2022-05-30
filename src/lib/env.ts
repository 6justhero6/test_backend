import * as dotenv from 'dotenv';
dotenv.config();

type Env = {
  'PORT': string,
  'JWT.SECRET_TOKEN': string,
  'DB.HOST': string,
  'DB.USERNAME': string,
  'DB.PASSWORD': string,
  'DB.NAME': string,
  'DB.PORT': string,
}

export function get(key: keyof Env): string {
  const value = process.env[key]
  if (!value) {
    throw new Error('No env value');
  }
  return value;
}
