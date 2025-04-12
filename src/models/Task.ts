import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interface for the Task object
export interface ITask extends Document {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose schema
const TaskSchema: Schema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

// Export model
export const Task = mongoose.model<ITask>('Task', TaskSchema);