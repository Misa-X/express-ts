import mongoose from "mongoose";
import Employee from "models/Employee";
import { Request, Response, NextFunction } from "express";

// CREATE EMPLOYEE
export const createEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phoneNumber, department, salary } = req.body;

  const employee = new Employee({
    name,
    email,
    phoneNumber,
    department,
    salary,
  });

  return employee
    .save()
    .then((employee) => res.status(201).json({ employee }))
    .catch((error) => res.status(500).json({ error }));
};

// UPDATE EMPLOYEE
export const updateEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeId = req.params.employeeId;

  return Employee.findById(employeeId)
    .then((employee) => {
      if (employee) {
        employee.set(req.body);

        return employee
          .save()
          .then((employee) => res.status(201).json({ employee }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// DELETE EMPLOYEE
export const deleteEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeId = req.params.employeeId;

  return Employee.findByIdAndUpdate(employeeId)
    .then((employee) =>
      employee
        ? res.status(201).json({ message: "Employee deleted" })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

// READ EMPLOYEE
export const readEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeId = req.params.employeeId;

  return Employee.findById(employeeId)
    .then((employee) =>
      employee
        ? res.status(200).json({ employee })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

// READ ALL EMPLOYEES
export const readAllEmployee = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Employee.find()
    .then((employees) => res.status(200).json({ employees }))
    .catch((error) => res.status(500).json({ error }));
};
