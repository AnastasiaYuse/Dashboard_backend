import { Task } from './Task';

export interface Employee {
  id: number; // Or number
  name: string;
  departmentId: number; // Foreign key to Department
  email: string;
  position: string;
  // Potentially add a list of task IDs or Task objects later
  // taskIds?: string[]; 
} 
export const mockEmployees: Employee[] = [
  { id: 1, name: 'John Doe', departmentId: 1, email: 'john.doe@example.com', position: 'Manager' },
  { id: 2, name: 'Jane Smith', departmentId: 2, email: 'jane.smith@example.com', position: 'Developer' },
  { id: 3, name: 'Alice Johnson', departmentId: 3, email: 'alice.johnson@example.com', position: 'Designer' },
];





