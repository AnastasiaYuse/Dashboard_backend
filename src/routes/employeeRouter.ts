import { Router } from 'express';
import employeeController from '../controllers/employeeController';

const router = Router();

// GET all employees
router.get('/', employeeController.getAllEmployees);

// GET employee by ID
router.get('/:id', employeeController.getEmployeeById);

// POST create new employee
router.post('/', employeeController.createEmployee);

// PUT update employee
router.put('/:id', employeeController.updateEmployee);

// DELETE employee
router.delete('/:id', employeeController.deleteEmployee);

export default router; 