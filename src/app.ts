import express from 'express';
import departmentRouter from './routes/departmentRouter';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/departments', departmentRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app; 