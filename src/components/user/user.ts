import { Schema, model, Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId,
  login: string,
  passwordHash: string,
}

export const schema = new Schema<IUser>({
  login: {
    type: String,
    unique: true,
    index: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

export const Model = model<IUser>('user', schema);
