"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const departmentController_1 = __importDefault(require("../controllers/departmentController"));
const router = (0, express_1.Router)();
const departmentController = departmentController_1.default;
// GET all departments
router.get('/', departmentController.getAllDepartments);
// GET department by id
router.get('/:id', departmentController.getDepartmentById);
// POST create new department
router.post('/', departmentController.createDepartment);
// PUT update department
router.put('/:id', departmentController.updateDepartment);
// DELETE department
router.delete('/:id', departmentController.deleteDepartment);
exports.default = router;
