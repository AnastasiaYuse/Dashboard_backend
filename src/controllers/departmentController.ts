import { Request, Response } from 'express';
import DepartmentService from '../services/departmentService';

class DepartmentController {
  // Get all departments
  getAllDepartments = async (req: Request, res: Response) => {
    try {
      const departments = await DepartmentService.getAllDepartments();
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching departments', error });
    }
  };

  // Get department by id
  getDepartmentById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const department = await DepartmentService.getDepartmentById(Number(id));
      if (!department) {
        res.status(404).json({ message: 'Department not found' });
        return;
      }
      res.status(200).json(department);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching department', error });
    }
  };

  // Create new department
  createDepartment = async (req: Request, res: Response) => {
    try {
      const departmentData = req.body;
      const newDepartment = await DepartmentService.createDepartment(departmentData);
      res.status(201).json(newDepartment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating department', error });
    }
  };

  // Update department
  updateDepartment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const departmentData = req.body;
      const updatedDepartment = await DepartmentService.updateDepartment(Number(id), departmentData);
      if (!updatedDepartment) {
        res.status(404).json({ message: 'Department not found' });
        return;
      }
      res.status(200).json(updatedDepartment);
    } catch (error) {
      res.status(500).json({ message: 'Error updating department', error });
    }
  };

  // Delete department
  deleteDepartment = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await DepartmentService.deleteDepartment(Number(id));
      if (!result) {
        res.status(404).json({ message: 'Department not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting department', error });
    }
  };
}

export default new DepartmentController(); 