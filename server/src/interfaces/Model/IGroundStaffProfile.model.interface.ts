import { Document, Types, PopulatedDoc } from 'mongoose';
import { IUser } from './IUser.model.interface.js';

export interface IGroundStaffProfile extends Document {
  userId: PopulatedDoc<IUser>;
  shift?: string;
  vehicleType?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
}
