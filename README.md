# Task Management System (REST API + React Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Authentication & Role-Based Access](#authentication--role-based-access)
- [Database Schema](#database-schema)
- [Security & Scalability](#security--scalability)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview
This project is a **Scalable Task Management System** built with a **RESTful API backend** and a **React frontend** for testing.  
It supports **user registration, login, and role-based access control** (Admin & User).  

- **Users:** Can add and view their own tasks.  
- **Admins:** Can view all users, view tasks of each user, and delete users or tasks.  

This project was built as an **internship task** to demonstrate backend, frontend, and API design skills.

---

## Features
### Backend
- ✅ User Registration & Login with JWT Authentication
- ✅ Role-Based Access (User vs Admin)
- ✅ CRUD APIs for Tasks
- ✅ Input Validation & Error Handling
- ✅ API Versioning Support
- ✅ Postman Collection for Testing

### Frontend
- ✅ React.js simple UI
- ✅ Register & Login
- ✅ Protected Dashboard (JWT required)
- ✅ Users: Add & view tasks
- ✅ Admins: Manage users and tasks
- ✅ Success/Error notifications

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Validation:** express-validator

---

## Folder Structure

# Task Management System (REST API + React Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Authentication & Role-Based Access](#authentication--role-based-access)
- [Database Schema](#database-schema)
- [Security & Scalability](#security--scalability)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Project Overview
This project is a **Scalable Task Management System** built with a **RESTful API backend** and a **React frontend** for testing.  
It supports **user registration, login, and role-based access control** (Admin & User).  

- **Users:** Can add and view their own tasks.  
- **Admins:** Can view all users, view tasks of each user, and delete users or tasks.  

This project was built as an **internship task** to demonstrate backend, frontend, and API design skills.

---

## Features
### Backend
- ✅ User Registration & Login with JWT Authentication
- ✅ Role-Based Access (User vs Admin)
- ✅ CRUD APIs for Tasks
- ✅ Input Validation & Error Handling
- ✅ API Versioning Support
- ✅ Postman Collection for Testing

### Frontend
- ✅ React.js simple UI
- ✅ Register & Login
- ✅ Protected Dashboard (JWT required)
- ✅ Users: Add & view tasks
- ✅ Admins: Manage users and tasks
- ✅ Success/Error notifications

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **Validation:** express-validator

---

## Folder Structure

task-api/
├─ auth-api/ # Backend
│ ├─ controllers/
│ ├─ middleware/
│ ├─ models/
│ ├─ routes/
│ ├─ .env
│ ├─ server.js
│ └─ package.json
├─ auth-frontend/ # Frontend
│ ├─ src/
│ ├─ public/
│ └─ package.json
├─ .gitignore
└─ README.md


---

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB running locally or MongoDB Atlas URI

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-api.git
cd task-api/auth-api

2.Install dependencies:

npm install

3.Create .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=1d

4.Start backend server:

npm run dev

5.Frontend Setup
cd ../auth-frontend
npm install
npm start

Frontend will run on http://localhost:3000 and connect to the backend API.



API Endpoints
Auth
| Method | Endpoint          | Description                    |
| ------ | ----------------- | ------------------------------ |
| POST   | `/auth/register`  | Register a new user            |
| POST   | `/auth/login`     | Login user and get JWT token   |
| GET    | `/auth/me`        | Get logged-in user info        |
| GET    | `/auth/all-users` | Admin: Get all users and tasks |
| DELETE | `/auth/users/:id` | Admin: Delete a user and tasks |

Tasks
| Method | Endpoint          | Description                |
| ------ | ----------------- | -------------------------- |
| GET    | `/tasks`          | Get logged-in user's tasks |
| GET    | `/tasks/user/:id` | Admin: Get tasks by user   |
| POST   | `/tasks`          | Create new task            |
| PUT    | `/tasks/:id`      | Update task                |
| DELETE | `/tasks/:id`      | Delete task (admin/user)   |

Frontend

Admin Dashboard: View all users, expand user tasks, delete users/tasks

User Dashboard: Add new tasks, view own tasks

Success/error messages shown dynamically on actions

Authentication & Role-Based Access

JWT Authentication: Token issued on login, required for protected routes

Role-Based Access:

User: Can create and view own tasks

Admin: Can view all users, manage tasks, delete users/tasks

Database Schema
User
| Field     | Type     | Description       |
| --------- | -------- | ----------------- |
| _id       | ObjectId | Primary key       |
| name      | String   | Full name         |
| email     | String   | Unique            |
| password  | String   | Hashed password   |
| role      | String   | "user" or "admin" |
| createdAt | Date     | Auto timestamp    |


Task
| Field       | Type     | Description       |
| ----------- | -------- | ----------------- |
| _id         | ObjectId | Primary key       |
| title       | String   | Task title        |
| description | String   | Task description  |
| createdBy   | ObjectId | Reference to User |
| createdAt   | Date     | Auto timestamp    |


Security & Scalability

Passwords hashed with bcrypt

JWT tokens for authentication

Input validation & sanitization

Modular project structure for easy scaling

Future improvements: caching (Redis), Docker deployment, microservices

Future Improvements

Task search & filtering

Task prioritization & deadlines

Email notifications or reminders

Unit testing & CI/CD integration