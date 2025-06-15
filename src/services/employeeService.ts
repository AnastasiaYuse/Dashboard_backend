import Employee from '../models/Employee';

class EmployeeService {
    async getAllEmployees() {
        try {
            return await Employee.findAll();
        } catch (error) {
            throw new Error('Error fetching employees');
        }
    }

    async getEmployeeById(id: number) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            return employee;
        } catch (error) {
            throw new Error('Error fetching employee');
        }
    }

    async createEmployee(employeeData: { name: string; departmentId: number; email: string; position: string }) {
        try {
            return await Employee.create(employeeData);
        } catch (error) {
            throw new Error('Error creating employee');
        }
    }

    async updateEmployee(id: number, employeeData: { name?: string; departmentId?: number; email?: string; position?: string }) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            return await employee.update(employeeData);
        } catch (error) {
            throw new Error('Error updating employee');
        }
    }

    async deleteEmployee(id: number) {
        try {
            const employee = await Employee.findByPk(id);
            if (!employee) {
                throw new Error('Employee not found');
            }
            await employee.destroy();
            return { message: 'Employee deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting employee');
        }
    }
}

export default new EmployeeService(); 