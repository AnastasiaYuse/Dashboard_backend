"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Project extends sequelize_1.Model {
}
Project.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    departmentId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'departments',
            key: 'id',
        },
    },
    startDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    endDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('Planning', 'In Progress', 'On Hold', 'Completed'),
        allowNull: false,
        defaultValue: 'Planning',
    }
}, {
    sequelize: database_1.default,
    modelName: 'Project',
    tableName: 'projects',
    timestamps: true,
});
exports.default = Project;
