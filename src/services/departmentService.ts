import Department from '../models/Department';

class DepartmentService {
    async getAllDepartments() {
        try {
            return await Department.findAll();
        } catch (error) {
            throw new Error('Error fetching departments');
        }
    }

    async getDepartmentById(id: number) {
        try {
            const department = await Department.findByPk(id);
            if (!department) {
                throw new Error('Department not found');
            }
            return department;
        } catch (error) {
            throw new Error('Error fetching department');
        }
    }

    async createDepartment(departmentData: { name: string }) {
        try {
            return await Department.create(departmentData);
        } catch (error) {
            throw new Error('Error creating department');
        }
    }

    async updateDepartment(id: number, departmentData: { name?: string }) {
        try {
            const department = await Department.findByPk(id);
            if (!department) {
                throw new Error('Department not found');
            }
            return await department.update(departmentData);
        } catch (error) {
            throw new Error('Error updating department');
        }
    }

    async deleteDepartment(id: number) {
        try {
            const department = await Department.findByPk(id);
            if (!department) {
                throw new Error('Department not found');
            }
            await department.destroy();
            return { message: 'Department deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting department');
        }
    }
}

export default new DepartmentService(); 