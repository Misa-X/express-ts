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
router.patch("/update/:departmentId", updateDepartment);
router.delete("/delete/:departmentId", deleteDepartment);

export = router;
