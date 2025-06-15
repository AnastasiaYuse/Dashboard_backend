import { Request, Response } from 'express';
import taskService from '../services/taskService';

class TaskController {
    async getAllTasks(req: Request, res: Response) {
        try {
            const tasks = await taskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch tasks' });
        }
    }

    async getTaskById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const task = await taskService.getTaskById(id);
            res.json(task);
        } catch (error) {
            if (error instanceof Error && error.message === 'Task not found') {
                res.status(404).json({ error: 'Task not found' });
            } else {
                res.status(500).json({ error: 'Failed to fetch task' });
            }
        }
    }

    async createTask(req: Request, res: Response) {
        try {
            const { title, description, status, dueDate, employeeId } = req.body;
            if (!title || !description || !status || !dueDate || !employeeId) {
                return res.status(400).json({ error: 'All fields are required' });
            }
            const task = await taskService.createTask({
                title,
                description,
                status,
                dueDate: new Date(dueDate),
                employeeId
            });
            res.status(201).json(task);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create task' });
        }
    }

    async updateTask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { title, description, status, dueDate, employeeId } = req.body;
            const taskData: any = {};
            if (title) taskData.title = title;
            if (description) taskData.description = description;
            if (status) taskData.status = status;
            if (dueDate) taskData.dueDate = new Date(dueDate);
            if (employeeId) taskData.employeeId = employeeId;
            const updatedTask = await taskService.updateTask(id, taskData);
            res.json(updatedTask);
        } catch (error) {
            if (error instanceof Error && error.message === 'Task not found') {
                res.status(404).json({ error: 'Task not found' });
            } else {
                res.status(500).json({ error: 'Failed to update task' });
            }
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await taskService.deleteTask(id);
            res.json({ message: 'Task deleted successfully' });
        } catch (error) {
            if (error instanceof Error && error.message === 'Task not found') {
                res.status(404).json({ error: 'Task not found' });
            } else {
                res.status(500).json({ error: 'Failed to delete task' });
            }
        }
    }
}

export default new TaskController(); 