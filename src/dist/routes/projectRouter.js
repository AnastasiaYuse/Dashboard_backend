"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectController_1 = __importDefault(require("../controllers/projectController"));
const router = (0, express_1.Router)();
// GET all projects
router.get('/', projectController_1.default.getAllProjects);
// GET project by ID
router.get('/:id', projectController_1.default.getProjectById);
// POST create new project
router.post('/', projectController_1.default.createProject);
// PUT update project
router.put('/:id', projectController_1.default.updateProject);
// DELETE project
router.delete('/:id', projectController_1.default.deleteProject);
exports.default = router;
