"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
const Department_1 = require("../models/Department");
class DepartmentService {
    constructor() {
        this.departments = [...Department_1.mockDepartments];
    }
    // Get all departments
    getAllDepartments() {
        return this.departments;
    }
    // Get department by id
    getDepartmentById(id) {
        return this.departments.find(dept => dept.id === id);
    }
    // Create new department
    createDepartment(department) {
        const newDepartment = Object.assign({ id: (this.departments.length + 1).toString() }, department);
        this.departments.push(newDepartment);
        return newDepartment;
    }
    // Update department
    updateDepartment(id, departmentData) {
        const index = this.departments.findIndex(dept => dept.id === id);
        if (index === -1)
            return undefined;
        const updatedDepartment = Object.assign(Object.assign({}, this.departments[index]), departmentData);
        this.departments[index] = updatedDepartment;
        return updatedDepartment;
    }
    // Delete department
    deleteDepartment(id) {
        const initialLength = this.departments.length;
        this.departments = this.departments.filter(dept => dept.id !== id);
        return initialLength !== this.departments.length;
    }
}
exports.DepartmentService = DepartmentService;
