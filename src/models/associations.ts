import Department from './Department';
import Employee from './Employee';
import Project from './Project';
import Task from './Task';

export const setupAssociations = () => {
    // Department associations
    Department.hasMany(Employee, {
        foreignKey: 'departmentId',
        as: 'employees'
    });

    Department.hasMany(Project, {
        foreignKey: 'departmentId',
        as: 'projects'
    });

    // Employee associations
    Employee.belongsTo(Department, {
        foreignKey: 'departmentId',
        as: 'department'
    });

    Employee.belongsToMany(Project, {
        through: 'EmployeeProjects',
        foreignKey: 'employeeId',
        as: 'projects'
    });

    Employee.belongsToMany(Task, {
        through: 'EmployeeTasks',
        foreignKey: 'employeeId',
        as: 'tasks'
    });

    // Project associations
    Project.belongsTo(Department, {
        foreignKey: 'departmentId',
        as: 'department'
    });

    Project.belongsToMany(Employee, {
        through: 'EmployeeProjects',
        foreignKey: 'projectId',
        as: 'employees'
    });

    Project.hasMany(Task, {
        foreignKey: 'projectId',
        as: 'tasks'
    });

    // Task associations
    Task.belongsTo(Project, {
        foreignKey: 'projectId',
        as: 'project'
    });

    Task.belongsToMany(Employee, {
        through: 'EmployeeTasks',
        foreignKey: 'taskId',
        as: 'employees'
    });
}; 