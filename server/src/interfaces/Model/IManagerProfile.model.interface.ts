import { Document, Types, PopulatedDoc } from 'mongoose';
import { IUser } from './IUser.model.interface.js';

export interface IManagerProfile extends Document {
  userId: PopulatedDoc<IUser>;
  shift?: string;
  permissions?: string[];
  createdAt: Date;
  updatedAt: Date;
}
