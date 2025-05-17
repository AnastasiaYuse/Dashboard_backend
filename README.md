# Dashboard Backend

A TypeScript-based backend service for a dashboard application, providing RESTful API endpoints for managing employees, departments, and tasks.

## 🚀 Features

- RESTful API architecture
- TypeScript implementation
- Express.js framework
- Structured data models for:
  - Employees
  - Departments
  - Tasks
- Health check endpoint
- Request logging middleware
- Global error handling

## 📋 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dashboard-backend
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on http://localhost:3000 by default.

## 📁 Project Structure

```
src/
├── models/           # Data models
│   ├── Employee.ts   # Employee model
│   ├── Department.ts # Department model
│   └── Task.ts      # Task model
├── index.ts         # Main application file
├── package.json     # Project dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## 🔌 API Endpoints

### Health Check
- `GET /api/v1/status`
  - Returns the current status of the API
  - Response: `{ status: 'UP', timestamp: 'ISO-8601 timestamp' }`

## 🛠️ Built With

- [Express.js](https://expressjs.com/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Node.js](https://nodejs.org/) - Runtime environment

## 📝 Scripts

- `npm start` - Run the production server
- `npm run dev` - Run the development server with hot-reload
- `npm run build` - Build the TypeScript project

## 🔒 Error Handling

The application includes a global error handler that:
- Logs errors to the console
- Returns a 500 status code with an error message
- Maintains security by not exposing internal error details

## 📝 License

This project is licensed under the ISC License.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 