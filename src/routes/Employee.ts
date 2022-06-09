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
router.patch("/update/:employeeId", updateEmployee);
router.delete("/delete/:employeeId", deleteEmployee);

export = router;
