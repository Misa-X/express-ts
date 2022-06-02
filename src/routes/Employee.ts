import express from "express";
import controller from "../controllers/Employee";

const router = express.Router();

router.post("/employee", controller.createEmployee);
router.get("/get/:employeeId", controller.readEmployee);
router.get("/getAll", controller.readAllEmployee);
router.patch("/update/:employeeId", controller.updateEmployee);
router.delete("/delete/:employeeId", controller.deleteEmployee);

export = router;
