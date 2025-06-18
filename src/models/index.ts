import Department from './Department';
import Employee from './Employee';
import Project from './Project';
import Task from './Task';
import { setupAssociations } from './associations';

// Setup all associations
setupAssociations();

export {
    Department,
    Employee,
    Project,
    Task
}; 