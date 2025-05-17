import { Department, mockDepartments } from '../models/Department';

export class DepartmentService {
  private departments: Department[] = [...mockDepartments];

  // Get all departments
  getAllDepartments(): Department[] {
    return this.departments;
  }

  // Get department by id
  getDepartmentById(id: string): Department | undefined {
    return this.departments.find(dept => dept.id === id);
  }

  // Create new department
  createDepartment(department: Omit<Department, 'id'>): Department {
    const newDepartment: Department = {
      id: (this.departments.length + 1).toString(), // Simple ID generation
      ...department
    };
    this.departments.push(newDepartment);
    return newDepartment;
  }

  // Update department
  updateDepartment(id: string, departmentData: Partial<Department>): Department | undefined {
    const index = this.departments.findIndex(dept => dept.id === id);
    if (index === -1) return undefined;

    const updatedDepartment = {
      ...this.departments[index],
      ...departmentData
    };
    this.departments[index] = updatedDepartment;
    return updatedDepartment;
  }

  // Delete department
  deleteDepartment(id: string): boolean {
    const initialLength = this.departments.length;
    this.departments = this.departments.filter(dept => dept.id !== id);
    return initialLength !== this.departments.length;
  }
} 