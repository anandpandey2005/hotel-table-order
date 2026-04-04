import { Document, Types, PopulatedDoc } from 'mongoose';
import { IUser } from './IUser.model.interface.js';
import { IProduct } from './IProduct.model.interface.js';

export interface ICart extends Document {
  userId: PopulatedDoc<IUser> | null;
  items: {
    productId: PopulatedDoc<IProduct>;
    name: string;
    quantity: number;
    priceAtAddition: number;
    customizations: string;
  }[];
  tempTotalAmount: number;
}
