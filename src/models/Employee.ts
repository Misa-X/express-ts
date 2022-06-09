import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  email: string;
  phoneNumber: string;
  department: string;
  salary: string;
}

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
