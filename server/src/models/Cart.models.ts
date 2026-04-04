import mongoose, { Schema } from 'mongoose';
import { ICart } from '../interfaces/Model/ICart.model.interfaces.js';

const CartSchema: Schema<ICart> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: false,
    },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        name: String,
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity cannot be less than 1'],
          default: 1,
        },
        priceAtAddition: {
          type: Number,
          required: true,
          set: (v: number) => parseFloat(v.toFixed(2)),
        },
        customizations: {
          type: String,
          default: '',
        },
      },
    ],
    tempTotalAmount: {
      type: Number,
      default: 0,
      set: (v: number) => parseFloat(v.toFixed(2)),
    },
  },
  { timestamps: true },
);

CartSchema.pre('save', function (next: any) {
  if (this.items.length > 0) {
    this.tempTotalAmount = this.items.reduce((total, item) => {
      return total + item.priceAtAddition * item.quantity;
    }, 0);
  } else {
    this.tempTotalAmount = 0;
  }
  next();
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', CartSchema);

export default Cart;
