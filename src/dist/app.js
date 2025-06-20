"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departmentRouter_1 = __importDefault(require("./routes/departmentRouter"));
const projectRouter_1 = __importDefault(require("./routes/projectRouter"));
const employeeRouter_1 = __importDefault(require("./routes/employeeRouter"));
const taskRouter_1 = __importDefault(require("./routes/taskRouter"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/v1/departments', departmentRouter_1.default);
app.use('/api/v1/projects', projectRouter_1.default);
app.use('/api/v1/employees', employeeRouter_1.default);
app.use('/api/v1/tasks', taskRouter_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});
exports.default = app;
