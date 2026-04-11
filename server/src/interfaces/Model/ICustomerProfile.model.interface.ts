import { Document, Types, PopulatedDoc } from 'mongoose';
import { IUser } from './IUser.model.interface.js';

export interface ICustomerProfile extends Document {
  userId: PopulatedDoc<IUser>;
  loyaltyPoints?: number;
  preferences?: string[];
  createdAt: Date;
  updatedAt: Date;
}
