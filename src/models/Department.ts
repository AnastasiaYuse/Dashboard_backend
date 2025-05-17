export interface Department {
  id: string; // Or number, depending on your DB
  name: string;
  // Potentially add a list of employee IDs or Employee objects later
  // employeeIds?: string[]; 
} 
export const mockDepartments: Department[] = [
  { id: '1', name: 'Sales' },
  { id: '2', name: 'Marketing' },
  { id: '3', name: 'Engineering' },
];
