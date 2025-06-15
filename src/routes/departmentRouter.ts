import { Router } from 'express';
import DepartmentController from '../controllers/departmentController';

const router = Router();
const departmentController = DepartmentController;

// GET all departments
router.get('/', departmentController.getAllDepartments);

// GET department by id
router.get('/:id', departmentController.getDepartmentById);

// POST create new department
router.post('/', departmentController.createDepartment);

// PUT update department
router.put('/:id', departmentController.updateDepartment);

// DELETE department
router.delete('/:id', departmentController.deleteDepartment);

export default router; 