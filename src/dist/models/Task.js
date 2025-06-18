"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Task extends sequelize_1.Model {
}
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('To Do', 'In Progress', 'Done'),
        allowNull: false,
        defaultValue: 'To Do',
    },
    dueDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    projectId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'projects',
            key: 'id',
        },
    },
    priority: {
        type: sequelize_1.DataTypes.ENUM('Low', 'Medium', 'High'),
        allowNull: false,
        defaultValue: 'Medium',
    }
}, {
    sequelize: database_1.default,
    modelName: 'Task',
    tableName: 'tasks',
    timestamps: true,
});
exports.default = Task;
