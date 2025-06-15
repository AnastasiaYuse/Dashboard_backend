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
const Project_1 = __importDefault(require("../models/Project"));
class ProjectService {
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Project_1.default.findAll();
            }
            catch (error) {
                throw new Error('Error fetching projects');
            }
        });
    }
    getProjectById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = yield Project_1.default.findByPk(id);
                if (!project) {
                    throw new Error('Project not found');
                }
                return project;
            }
            catch (error) {
                throw new Error('Error fetching project');
            }
        });
    }
    createProject(projectData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Project_1.default.create(projectData);
            }
            catch (error) {
                throw new Error('Error creating project');
            }
        });
    }
    updateProject(id, projectData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = yield Project_1.default.findByPk(id);
                if (!project) {
                    throw new Error('Project not found');
                }
                return yield project.update(projectData);
            }
            catch (error) {
                throw new Error('Error updating project');
            }
        });
    }
    deleteProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const project = yield Project_1.default.findByPk(id);
                if (!project) {
                    throw new Error('Project not found');
                }
                yield project.destroy();
                return { message: 'Project deleted successfully' };
            }
            catch (error) {
                throw new Error('Error deleting project');
            }
        });
    }
}
exports.default = new ProjectService();
