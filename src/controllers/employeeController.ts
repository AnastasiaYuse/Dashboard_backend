import { Request, Response } from 'express';
import employeeService from '../services/employeeService';

class EmployeeController {
    async getAllEmployees(req: Request, res: Response) {
        try {
            const employees = await employeeService.getAllEmployees();
            res.json(employees);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch employees' });
        }
    }

    async getEmployeeById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const employee = await employeeService.getEmployeeById(id);
            res.json(employee);
        } catch (error) {
            if (error instanceof Error && error.message === 'Employee not found') {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.status(500).json({ error: 'Failed to fetch employee' });
            }
        }
    }

    async createEmployee(req: Request, res: Response) {
        try {
            const { name, email, position, departmentId } = req.body;
            
            if (!name || !email || !position || !departmentId) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const employee = await employeeService.createEmployee({
                name,
                email,
                position,
                departmentId
            });
            
            res.status(201).json(employee);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create employee' });
        }
    }

    async updateEmployee(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { name, email, position, departmentId } = req.body;

            const employeeData: any = {};
            if (name) employeeData.name = name;
            if (email) employeeData.email = email;
            if (position) employeeData.position = position;
            if (departmentId) employeeData.departmentId = departmentId;

            const updatedEmployee = await employeeService.updateEmployee(id, employeeData);
            res.json(updatedEmployee);
        } catch (error) {
            if (error instanceof Error && error.message === 'Employee not found') {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.status(500).json({ error: 'Failed to update employee' });
            }
        }
    }

    async deleteEmployee(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await employeeService.deleteEmployee(id);
            res.json({ message: 'Employee deleted successfully' });
        } catch (error) {
            if (error instanceof Error && error.message === 'Employee not found') {
                res.status(404).json({ error: 'Employee not found' });
            } else {
                res.status(500).json({ error: 'Failed to delete employee' });
            }
        }
    }
}

export default new EmployeeController(); 