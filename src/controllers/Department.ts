import mongoose from "mongoose";
import Department from "../models/Department";
import { Request, Response, NextFunction } from "express";

// CREATE DEPARTMENT
export const createDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, location } = req.body;

  const department = new Department({
    _id: new mongoose.Types.ObjectId(),
    name,
    location,
  });

  return department
    .save()
    .then((department) => res.status(201).json({ department }))
    .catch((error) => res.status(500).json({ error }));
};

// UPDATE DEPARTMENT
export const updateDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const departmentId = req.params.departmentId;

  return Department.findById(departmentId)
    .then((department) => {
      if (department) {
        department.set(req.body);

        return department
          .save()
          .then((department) => res.status(201).json({ department }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

// DELETE DEPARTMENT
export const deleteDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const departmentId = req.params.departmentId;

  return Department.findByIdAndUpdate(departmentId)
    .then((department) =>
      department
        ? res.status(201).json({ message: "Department deleted" })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

// READ DEPARTMENT
export const readDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const departmentId = req.params.departmentId;

  return Department.findById(departmentId)
    .then((department) =>
      department
        ? res.status(200).json({ department })
        : res.status(404).json({ message: "Not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

// READ ALL DEPARTMENTS
export const readAllDepartment = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return Department.find()
    .then((departments) => res.status(200).json({ departments }))
    .catch((error) => res.status(500).json({ error }));
};
