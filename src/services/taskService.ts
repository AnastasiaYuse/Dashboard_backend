import Task from '../models/Task';

class TaskService {
    async getAllTasks() {
        try {
            return await Task.findAll();
        } catch (error) {
            throw new Error('Error fetching tasks');
        }
    }

    async getTaskById(id: number) {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Task not found');
            }
            return task;
        } catch (error) {
            throw new Error('Error fetching task');
        }
    }

    async createTask(taskData: {
        title: string;
        description: string;
        status: string;
        dueDate: Date;
        employeeId: number;
        projectId: number;
    }) {
        try {
            return await Task.create(taskData);
        } catch (error) {
            throw new Error('Error creating task');
        }
    }

    async updateTask(id: number, taskData: {
        title?: string;
        description?: string;
        status?: string;
        dueDate?: Date;
        employeeId?: number;
        projectId?: number;
    }) {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Task not found');
            }
            return await task.update(taskData);
        } catch (error) {
            throw new Error('Error updating task');
        }
    }

    async deleteTask(id: number) {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Task not found');
            }
            await task.destroy();
            return { message: 'Task deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting task');
        }
    }
}

export default new TaskService(); 