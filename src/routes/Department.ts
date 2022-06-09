import express from "express";
import {
  createDepartment,
  readAllDepartment,
  readDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/Department";

const router = express.Router();

router.post("/department", createDepartment);
router.get("/get/:departmentId", readDepartment);
router.get("/getAll", readAllDepartment);
router.patch("/department/:departmentId", updateDepartment);
router.delete("/delDepartment/:departmentId", deleteDepartment);

export default router;
