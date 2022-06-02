"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_1 = __importDefault(require("../models/Employee"));
// CREATE EMPLOYEE
const createEmployee = (req, res, next) => {
    const { name } = req.body;
    const { email } = req.body;
    const { phone_number } = req.body;
    const { department } = req.body;
    const { salary } = req.body;
    const employee = new Employee_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        email,
        phone_number,
        department,
        salary,
    });
    return employee
        .save()
        .then((employee) => res.status(201).json({ employee }))
        .catch((error) => res.status(500).json({ error }));
};
// UPDATE EMPLOYEE
const updateEmployee = (req, res, next) => {
    const employeeId = req.params.employeeId;
    return Employee_1.default.findById(employeeId)
        .then((employee) => {
        if (employee) {
            employee.set(req.body);
            return employee
                .save()
                .then((employee) => res.status(201).json({ employee }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: "Not found" });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
// DELETE EMPLOYEE
const deleteEmployee = (req, res, next) => {
    const employeeId = req.params.employeeId;
    return Employee_1.default.findByIdAndUpdate(employeeId)
        .then((employee) => employee
        ? res.status(201).json({ message: "Employee deleted" })
        : res.status(404).json({ message: "Not found" }))
        .catch((error) => res.status(500).json({ error }));
};
// READ EMPLOYEE
const readEmployee = (req, res, next) => {
    const employeeId = req.params.employeeId;
    return Employee_1.default.findById(employeeId)
        .then((employee) => employee
        ? res.status(200).json({ employee })
        : res.status(404).json({ message: "Not found" }))
        .catch((error) => res.status(500).json({ error }));
};
// READ ALL EMPLOYEES
const readAllEmployee = (req, res, next) => {
    return Employee_1.default.find()
        .then((employees) => res.status(200).json({ employees }))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = {
    createEmployee,
    updateEmployee,
    deleteEmployee,
    readEmployee,
    readAllEmployee,
};
