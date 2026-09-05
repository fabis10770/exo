# Exoclust

A modern full-stack web application built with React, TypeScript, and the TanStack ecosystem.

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing & SSR:** TanStack Start & TanStack React Router
- **State & Data Fetching:** TanStack React Query
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI (shadcn/ui style)
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Charts:** Recharts

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fabis10770/exo.git
cd exoclust-lovable-files
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📁 Project Structure

- `src/assets/`: Images and static assets
- `src/components/ui/`: Reusable, accessible UI components (built on Radix UI)
- `src/routes/`: File-based routing handled by TanStack Router
- `src/server.ts`: The current Node.js SSR/Backend entry point
- `src/lib/`: Utility functions and error reporting

## 🛣️ Roadmap
- Transition the backend architecture from Node.js (TanStack Start) to a **Python FastAPI** microservice.
- Maintain React SPA frontend architecture for seamless integration with the new Python API.
