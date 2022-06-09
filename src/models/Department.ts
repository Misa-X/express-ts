import mongoose, { Document, Schema } from "mongoose";

export interface IDepartment {
  name: string;
  location: string;
}

export interface IDepartment extends Document {}

const DepartmentSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IDepartment>("Department", DepartmentSchema);
