import { Request, Response } from 'express';
import projectService from '../services/projectService';

class ProjectController {
    async getAllProjects(req: Request, res: Response) {
        try {
            const projects = await projectService.getAllProjects();
            res.json(projects);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch projects' });
        }
    }

    async getProjectById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const project = await projectService.getProjectById(id);
            res.json(project);
        } catch (error) {
            if (error instanceof Error && error.message === 'Project not found') {
                res.status(404).json({ error: 'Project not found' });
            } else {
                res.status(500).json({ error: 'Failed to fetch project' });
            }
        }
    }

    async createProject(req: Request, res: Response) {
        try {
            const { name, description, departmentId, employeeId, projectDeadline } = req.body;
            
            if (!name || !description || !departmentId || !employeeId || !projectDeadline) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            const project = await projectService.createProject({
                name,
                description,
                departmentId,
                employeeId,
                projectDeadline: new Date(projectDeadline)
            });
            
            res.status(201).json(project);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create project' });
        }
    }

    async updateProject(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { name, description, departmentId, employeeId, projectDeadline } = req.body;

            const projectData: any = {};
            if (name) projectData.name = name;
            if (description) projectData.description = description;
            if (departmentId) projectData.departmentId = departmentId;
            if (employeeId) projectData.employeeId = employeeId;
            if (projectDeadline) projectData.projectDeadline = new Date(projectDeadline);

            const updatedProject = await projectService.updateProject(id, projectData);
            res.json(updatedProject);
        } catch (error) {
            if (error instanceof Error && error.message === 'Project not found') {
                res.status(404).json({ error: 'Project not found' });
            } else {
                res.status(500).json({ error: 'Failed to update project' });
            }
        }
    }

    async deleteProject(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            await projectService.deleteProject(id);
            res.json({ message: 'Project deleted successfully' });
        } catch (error) {
            if (error instanceof Error && error.message === 'Project not found') {
                res.status(404).json({ error: 'Project not found' });
            } else {
                res.status(500).json({ error: 'Failed to delete project' });
            }
        }
    }
}

export default new ProjectController(); 