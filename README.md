```md
# Prisma User Management

A simple full-stack user management application built with **React, Express.js, Prisma ORM, and SQL**.

## Features

- View all users
- Create a new user
- Update an existing user
- Delete a user
- REST API with Express.js
- Database operations using Prisma ORM
- React frontend

## Tech Stack

- React
- Express.js
- Node.js
- Prisma ORM
- SQL
- JavaScript

## Project Structure

```text
.
├── frontend/          # React frontend
├── src/               # Express backend
├── prisma/            # Prisma schema and migrations
├── generated/         # Generated Prisma files
├── node_modules/
├── .env               # Environment variables
├── .env.example
├── prisma7.config.ts
├── package.json
├── package-lock.json
└── README.md
```

## Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="your-database-connection-string"
```

### 4. Setup Prisma

Generate the Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

### 5. Start the backend

```bash
npm run dev
```

The backend runs on:

```text
http://localhost:8080
```

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will usually run on:

```text
http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/user` | Get all users |
| POST | `/user` | Create a new user |
| PUT | `/user/:id` | Update a user |
| DELETE | `/user/:id` | Delete a user |

## Example Request

### Create User

```http
POST /user
Content-Type: application/json
```

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update User

```http
PUT /user/1
Content-Type: application/json
```

```json
{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

### Delete User

```http
DELETE /user/1
```

## Prisma Commands

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

## Environment Variables

Create `.env` from `.env.example` and add your database connection:

```env
DATABASE_URL="your-database-connection-string"
```

> Do not commit `.env` to GitHub.

## Author

**Pranav Thawait**
```