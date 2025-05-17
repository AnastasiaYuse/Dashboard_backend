import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simple middleware for logging
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// First API Endpoint: Health Check
app.get('/api/v1/status', (req: Request, res: Response) => {
  res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app; // Export app for potential testing or other uses 