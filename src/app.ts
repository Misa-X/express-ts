import { config } from "./config/config";
import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/Employee";
import departmentRoutes from "./routes/Department";

const app: Application = express();
const port: number = 3000;

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, { retryWrites: true, w: "majority" })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// ROUTES
app.use("/employees", employeeRoutes);
app.use("/departments", departmentRoutes);
