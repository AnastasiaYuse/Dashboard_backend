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
const departmentService_1 = __importDefault(require("../services/departmentService"));
class DepartmentController {
    constructor() {
        // Get all departments
        this.getAllDepartments = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const departments = yield departmentService_1.default.getAllDepartments();
                res.status(200).json(departments);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching departments', error });
            }
        });
        // Get department by id
        this.getDepartmentById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const department = yield departmentService_1.default.getDepartmentById(Number(id));
                if (!department) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(200).json(department);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching department', error });
            }
        });
        // Create new department
        this.createDepartment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const departmentData = req.body;
                const newDepartment = yield departmentService_1.default.createDepartment(departmentData);
                res.status(201).json(newDepartment);
            }
            catch (error) {
                res.status(500).json({ message: 'Error creating department', error });
            }
        });
        // Update department
        this.updateDepartment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const departmentData = req.body;
                const updatedDepartment = yield departmentService_1.default.updateDepartment(Number(id), departmentData);
                if (!updatedDepartment) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(200).json(updatedDepartment);
            }
            catch (error) {
                res.status(500).json({ message: 'Error updating department', error });
            }
        });
        // Delete department
        this.deleteDepartment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield departmentService_1.default.deleteDepartment(Number(id));
                if (!result) {
                    res.status(404).json({ message: 'Department not found' });
                    return;
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ message: 'Error deleting department', error });
            }
        });
    }
}
exports.default = new DepartmentController();
