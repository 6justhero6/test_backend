import * as Slide from './slide';

export function isDataASlide(data: any): data is Slide.ISlide {
  return (data.type === 'button' || data.type === 'text') && typeof data.content === 'string';
}

export async function create(slideData: Slide.ISlide): Promise<Slide.ISlide> {
  return await Slide.Model.create(slideData);
}

export async function getAll(): Promise<Slide.ISlide[]> {
  return Slide.Model.find().lean().exec();
}
