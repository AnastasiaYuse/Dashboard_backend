import { Employee, mockEmployees } from '../models/Employee';

class EmployeeService {
    async getAllEmployees() {
        try {
            return mockEmployees;
        } catch (error) {
            throw new Error('Error fetching employees');
        }
    }

    async getEmployeeById(id: number) {
        try {
            const employee = mockEmployees.find(emp => emp.id === id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            return employee;
        } catch (error) {
            throw new Error('Error fetching employee');
        }
    }

    async createEmployee(employeeData: Omit<Employee, 'id'>) {
        try {
            const newEmployee: Employee = {
                id: (mockEmployees.length + 1),
                ...employeeData
            };
            mockEmployees.push(newEmployee);
            return newEmployee;
        } catch (error) {
            throw new Error('Error creating employee');
        }
    }

    async updateEmployee(id: number, employeeData: Partial<Omit<Employee, 'id'>>) {
        try {
            const index = mockEmployees.findIndex(emp => emp.id === id);
            if (index === -1) {
                throw new Error('Employee not found');
            }
            mockEmployees[index] = { ...mockEmployees[index], ...employeeData };
            return mockEmployees[index];
        } catch (error) {
            throw new Error('Error updating employee');
        }
    }

    async deleteEmployee(id: number) {
        try {
            const index = mockEmployees.findIndex(emp => emp.id === id);
            if (index === -1) {
                throw new Error('Employee not found');
            }
            mockEmployees.splice(index, 1);
            return { message: 'Employee deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting employee');
        }
    }
}

export default new EmployeeService(); 