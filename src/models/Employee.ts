import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee {
  name: string;
  email: string;
  phone_number: string;
  department: string;
  salary: string;
}

export interface IEmployeeModel extends IEmployee, Document {}

const EmployeeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IEmployeeModel>("Employee", EmployeeSchema);
