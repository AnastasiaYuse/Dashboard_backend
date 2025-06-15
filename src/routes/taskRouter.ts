import { Router } from 'express';
import taskController from '../controllers/taskController';

const router = Router();

// GET all tasks
router.get('/', taskController.getAllTasks);

// GET task by ID
router.get('/:id', taskController.getTaskById);

// POST create new task
router.post('/', taskController.createTask);

// PUT update task
router.put('/:id', taskController.updateTask);

// DELETE task
router.delete('/:id', taskController.deleteTask);

export default router; 