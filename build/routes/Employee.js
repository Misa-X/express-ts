"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Employee_1 = __importDefault(require("../controllers/Employee"));
const router = express_1.default.Router();
router.post("/employee", Employee_1.default.createEmployee);
router.get("/get/:employeeId", Employee_1.default.readEmployee);
router.get("/getAll", Employee_1.default.readAllEmployee);
router.patch("/update/:employeeId", Employee_1.default.updateEmployee);
router.delete("/delete/:employeeId", Employee_1.default.deleteEmployee);
module.exports = router;
