"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const projectService_1 = __importDefault(require("../services/projectService"));
class ProjectController {
    getAllProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield projectService_1.default.getAllProjects();
                res.json(projects);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to fetch projects' });
            }
        });
    }
    getProjectById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const project = yield projectService_1.default.getProjectById(id);
                res.json(project);
            }
            catch (error) {
                if (error instanceof Error && error.message === 'Project not found') {
                    res.status(404).json({ error: 'Project not found' });
                }
                else {
                    res.status(500).json({ error: 'Failed to fetch project' });
                }
            }
        });
    }
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, description, departmentId, employeeId, projectDeadline } = req.body;
                if (!name || !description || !departmentId || !employeeId || !projectDeadline) {
                    return res.status(400).json({ error: 'All fields are required' });
                }
                const project = yield projectService_1.default.createProject({
                    name,
                    description,
                    departmentId,
                    employeeId,
                    projectDeadline: new Date(projectDeadline)
                });
                res.status(201).json(project);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to create project' });
            }
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const { name, description, departmentId, employeeId, projectDeadline } = req.body;
                const projectData = {};
                if (name)
                    projectData.name = name;
                if (description)
                    projectData.description = description;
                if (departmentId)
                    projectData.departmentId = departmentId;
                if (employeeId)
                    projectData.employeeId = employeeId;
                if (projectDeadline)
                    projectData.projectDeadline = new Date(projectDeadline);
                const updatedProject = yield projectService_1.default.updateProject(id, projectData);
                res.json(updatedProject);
            }
            catch (error) {
                if (error instanceof Error && error.message === 'Project not found') {
                    res.status(404).json({ error: 'Project not found' });
                }
                else {
                    res.status(500).json({ error: 'Failed to update project' });
                }
            }
        });
    }
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                yield projectService_1.default.deleteProject(id);
                res.json({ message: 'Project deleted successfully' });
            }
            catch (error) {
                if (error instanceof Error && error.message === 'Project not found') {
                    res.status(404).json({ error: 'Project not found' });
                }
                else {
                    res.status(500).json({ error: 'Failed to delete project' });
                }
            }
        });
    }
}
exports.default = new ProjectController();
