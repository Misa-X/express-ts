import express from "express";
import {
  createEmployee,
  readAllEmployee,
  readEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/Employee";

const router = express.Router();

router.post("/employee", createEmployee);
router.get("/get/:employeeId", readEmployee);
router.get("/getAll", readAllEmployee);
router.patch("/employee/:employeeId", updateEmployee);
router.delete("/delEmployee/:employeeId", deleteEmployee);

export default router;
