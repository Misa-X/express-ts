import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee {
  name: string;
  email: string;
  phoneNumber: string;
  department: string;
  salary: string;
}

export interface IEmployee extends Document {}

const EmployeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  salary: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
