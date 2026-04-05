import { Document, PopulatedDoc, Types } from 'mongoose';
import { ICategory } from './ICategory.models.interface.js';

export interface IProduct extends Document {
  name: string;
  images: string[];
  ingredients?: string[];
  regularPrice: number;
  todayPrice: number;
  discountPercentage: number;
  category: PopulatedDoc<ICategory>;
  rating?: number;
  stock: number;
  underOffer?: boolean;
  isActive?: boolean;
  note: string;
  createdAt?: Date;
  updatedAt?: Date;
}
