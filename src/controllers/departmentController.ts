import { Request, Response } from 'express';
import { DepartmentService } from '../services/departmentService';

export class DepartmentController {
  private departmentService: DepartmentService;

  constructor() {
    this.departmentService = new DepartmentService();
  }

  // Get all departments
  getAllDepartments = (req: Request, res: Response): void => {
    try {
      const departments = this.departmentService.getAllDepartments();
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching departments', error });
    }
  };

  // Get department by id
  getDepartmentById = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const department = this.departmentService.getDepartmentById(id);
      
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
  createDepartment = (req: Request, res: Response): void => {
    try {
      const departmentData = req.body;
      const newDepartment = this.departmentService.createDepartment(departmentData);
      res.status(201).json(newDepartment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating department', error });
    }
  };

  // Update department
  updateDepartment = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const departmentData = req.body;
      const updatedDepartment = this.departmentService.updateDepartment(id, departmentData);
      
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
  deleteDepartment = (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const success = this.departmentService.deleteDepartment(id);
      
      if (!success) {
        res.status(404).json({ message: 'Department not found' });
        return;
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting department', error });
    }
  };
} 