import * as bcrypt from 'bcrypt';

export async function makePasswordHash(password: string): Promise<string> {
  const salt: string = await bcrypt.genSalt(4);
  return bcrypt.hash(password, salt);
}

export function validate(password: string, passwordHash: string): Promise<boolean> {
  return bcrypt.compare(password, passwordHash);
}
