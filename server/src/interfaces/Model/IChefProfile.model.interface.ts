import { Document, Types, PopulatedDoc } from 'mongoose';
import { IUser } from './IUser.model.interface.js';

export interface IChefProfile extends Document {
  userId: PopulatedDoc<IUser>;
  shift?: string;
  specialty?: string[];
  createdAt: Date;
  updatedAt: Date;
}
