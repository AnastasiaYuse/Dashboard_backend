export interface Task {
  id: string; // Or number
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
  dueDate?: Date;
  assigneeId: string; // Foreign key to Employee
} 
export const mockTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'To Do', assigneeId: '1' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'In Progress', assigneeId: '2' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'Done', assigneeId: '3' },
];


