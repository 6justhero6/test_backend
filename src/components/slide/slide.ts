import { Schema, model } from 'mongoose';

export interface ISlide {
  type: 'text' | 'button';
  content: string;
}

export const schema = new Schema<ISlide>({
  type: String,
  content: String,
});

export const Model = model<ISlide>('slide', schema);
