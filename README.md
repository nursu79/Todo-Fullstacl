# 📝 Todo Fullstack — Scalable Decoupled Architecture

A modern, production-ready Fullstack Todo Management System built with a **decoupled architecture**—combining a **Next.js 16 (App Router + Turbopack)** frontend with an **Express.js RESTful API** backend.

---

## 🏛️ System Architecture

The application is engineered around a strict **Separation of Concerns (SoC)** and **Client-Server Decoupled Pattern**:

```text
┌─────────────────────────────────────────────────────────┐
│              Next.js 16 Frontend (CSR/SSR)              │
│       React 19 • Tailwind CSS • TypeScript • App Router │
└────────────────────────────┬────────────────────────────┘
                             │
                             │ REST API (JSON / JSEND)
                             ▼
┌─────────────────────────────────────────────────────────┐
│               Express.js RESTful Backend                │
│       Node.js • Swagger OpenAPI • Middleware Pipeline   │
└────────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────┐
│                 JSON File Storage / DB                  │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Key Capabilities & Features

### 🎨 Frontend Capabilities (`todo-frontend`)
* **Hybrid Rendering (SSR + CSR)**: Initial page load is server-side rendered (`initialTodos`) for high SEO and low FCP, hydrating into a dynamic client-side state container.
* **Full Todo Lifecycle**: Create, Read, Update (inline modal edit), Delete, Archive, and Unarchive todos.
* **Server-Side Pagination & Filtering**: Filter by `all`, `pending`, `completed`, or `archived` states with custom page limits.
* **Anti-Spam & Race Condition Prevention**: State-guarded button handlers (`isPending`) prevent duplicate network requests and socket drops during rapid user interaction.
* **JSEND Envelope Normalization**: Data abstraction layer unwraps raw backend JSON responses into strongly-typed domain models (`Todo[]`).

### ⚙️ Backend Capabilities (`todo-api`)
* **RESTful Endpoints**: Clean API routes (`/api/v1/todos`) adhering to HTTP verbs (`GET`, `POST`, `PATCH`, `DELETE`).
* **JSEND Standard JSON Specifications**: Unified response format (`{ status: "success", data: { ... } }`).
* **Interactive Swagger OpenAPI Documentation**: Self-documenting API available at `/api-docs`.
* **API Feature Pipeline**: Modular filtering, sorting, archiving, and pagination query builder.
* **Global Error Middleware**: Centralized async error handling using custom `AppError` abstractions.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 16, React 19, TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express.js, Swagger UI |
| **Architecture** | Decoupled RESTful Architecture |
| **API Format** | JSEND Standard JSON |

---

## 📂 Project Structure

```text
todo-fullstack/
├── todo-api/                 # Standalone Express REST API
│   ├── controllers/          # Request handlers & logic
│   ├── dev-data/             # JSON data persistence layer
│   ├── models/               # Data model abstractions & file IO
│   ├── routes/               # API route definitions
│   ├── utils/                # API Features, AppError, Swagger
│   ├── app.js                # Express middleware & app config
│   ├── server.js             # Process entry point & crash handlers
│   └── .env.example          # Environment template
│
└── todo-frontend/            # Standalone Next.js 16 Web App
    ├── app/                  # App Router entry points & SSR pages
    ├── components/todo/      # Modular Client UI Components
    ├── lib/api/              # Data Abstraction Layer & fetch client
    ├── types/                # TypeScript interfaces & types
    └── .env.example          # Environment template
```

---

## 💻 Local Development Setup

### 1. Start the Backend API
```bash
cd todo-api
npm install
npm run dev
```
* Backend starts at: `http://localhost:5000`
* Swagger UI Docs: `http://localhost:5000/api-docs`

### 2. Start the Frontend App
```bash
cd todo-frontend
npm install
npm run dev
```
* Frontend starts at: `http://localhost:3000`

---

## 🌐 Production Deployment

* **Backend (`todo-api`)**: Deployed to **Render** (`https://todo-api-url.onrender.com`).
* **Frontend (`todo-frontend`)**: Deployed to **Vercel** (`https://todo-frontend-url.vercel.app`).
