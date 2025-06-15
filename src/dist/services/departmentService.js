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
const Department_1 = __importDefault(require("../models/Department"));
class DepartmentService {
    getAllDepartments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Department_1.default.findAll();
            }
            catch (error) {
                throw new Error('Error fetching departments');
            }
        });
    }
    getDepartmentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Department_1.default.findByPk(id);
                if (!department) {
                    throw new Error('Department not found');
                }
                return department;
            }
            catch (error) {
                throw new Error('Error fetching department');
            }
        });
    }
    createDepartment(departmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Department_1.default.create(departmentData);
            }
            catch (error) {
                throw new Error('Error creating department');
            }
        });
    }
    updateDepartment(id, departmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Department_1.default.findByPk(id);
                if (!department) {
                    throw new Error('Department not found');
                }
                return yield department.update(departmentData);
            }
            catch (error) {
                throw new Error('Error updating department');
            }
        });
    }
    deleteDepartment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const department = yield Department_1.default.findByPk(id);
                if (!department) {
                    throw new Error('Department not found');
                }
                yield department.destroy();
                return { message: 'Department deleted successfully' };
            }
            catch (error) {
                throw new Error('Error deleting department');
            }
        });
    }
}
exports.default = new DepartmentService();
