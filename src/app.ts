import express from 'express';
import departmentRouter from './routes/departmentRouter';
import projectRouter from './routes/projectRouter';
import employeeRouter from './routes/employeeRouter';
import taskRouter from './routes/taskRouter';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/departments', departmentRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/employees', employeeRouter);
app.use('/api/v1/tasks', taskRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app; 