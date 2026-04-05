import mongoose, { Schema } from 'mongoose';
import { ITable } from '../interfaces/Model/ITable.models.interface.js';
import { required } from 'zod/mini';

const TableSchema = new Schema<ITable>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tableNumber: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Table = mongoose.models.Table || mongoose.model<ITable>('Table', TableSchema);

export default Table;
