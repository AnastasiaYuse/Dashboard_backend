"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentController = void 0;
const departmentService_1 = require("../services/departmentService");
class DepartmentController {
    constructor() {
        // Get all departments
        this.getAllDepartments = (req, res) => {
            try {
                const departments = this.departmentService.getAllDepartments();
                res.status(200).json(departments);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching departments', error });
            }
        };
        // Get department by id
        this.getDepartmentById = (req, res) => {
            try {
                const { id } = req.params;
                const department = this.departmentService.getDepartmentById(id);
                if (!department) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(200).json(department);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching department', error });
            }
        };
        // Create new department
        this.createDepartment = (req, res) => {
            try {
                const departmentData = req.body;
                const newDepartment = this.departmentService.createDepartment(departmentData);
                res.status(201).json(newDepartment);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating department', error });
            }
        };
        // Update department
        this.updateDepartment = (req, res) => {
            try {
                const { id } = req.params;
                const departmentData = req.body;
                const updatedDepartment = this.departmentService.updateDepartment(id, departmentData);
                if (!updatedDepartment) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(200).json(updatedDepartment);
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating department', error });
            }
        };
        // Delete department
        this.deleteDepartment = (req, res) => {
            try {
                const { id } = req.params;
                const success = this.departmentService.deleteDepartment(id);
                if (!success) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting department', error });
            }
        };
        this.departmentService = new departmentService_1.DepartmentService();
    }
}
exports.DepartmentController = DepartmentController;
