import Project from '../models/Project';

class ProjectService {
    async getAllProjects() {
        try {
            return await Project.findAll();
        } catch (error) {
            throw new Error('Error fetching projects');
        }
    }

    async getProjectById(id: number) {
        try {
            const project = await Project.findByPk(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return project;
        } catch (error) {
            throw new Error('Error fetching project');
        }
    }

    async createProject(projectData: {
        name: string;
        description: string;
        departmentId: number;
        employeeId: number;
        projectDeadline: Date;
    }) {
        try {
            return await Project.create(projectData);
        } catch (error) {
            throw new Error('Error creating project');
        }
    }

    async updateProject(id: number, projectData: {
        name?: string;
        description?: string;
        departmentId?: number;
        employeeId?: number;
        projectDeadline?: Date;
    }) {
        try {
            const project = await Project.findByPk(id);
            if (!project) {
                throw new Error('Project not found');
            }
            return await project.update(projectData);
        } catch (error) {
            throw new Error('Error updating project');
        }
    }

    async deleteProject(id: number) {
        try {
            const project = await Project.findByPk(id);
            if (!project) {
                throw new Error('Project not found');
            }
            await project.destroy();
            return { message: 'Project deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting project');
        }
    }
}

export default new ProjectService(); 