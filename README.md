# KaroAI

KaroAI is a full-stack AI application with a React/Vite frontend and a Node.js/Express backend. The project includes authentication, API services, AI-related state management, database connectivity, file handling, and document/PDF processing.

## Project structure

```text
KaroAI/
├── Backend/
│   ├── server.js          # Backend entry point
│   ├── package.json       # Backend dependencies and scripts
│   └── src/               # Application, routes, services, and database configuration
└── Frontend/
    ├── UI.txt             # Frontend architecture notes
    └── vite-project/
        ├── src/           # React application source
        ├── public/        # Static assets
        └── package.json   # Frontend dependencies and scripts
```

## Technology stack

### Frontend

- React
- Vite
- React Router
- Axios
- Sass
- ESLint

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- JSON Web Tokens and cookies for authentication
- Google GenAI
- Multer for file uploads
- PDF parsing and Puppeteer support
- Zod for validation

## Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB
- A Google GenAI API key if AI features are enabled

## Getting started

Clone the repository and move into the project directory:

```bash
git clone https://github.com/Ishai21/karoAI.git
cd karoAI
```

### 1. Set up the backend

```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend` directory and add the environment variables required by the database, authentication, and AI configuration used by the application.

Start the backend in development mode:

```bash
npm run dev
```

The backend starts on port `3000`.

### 2. Set up the frontend

Open a second terminal and run:

```bash
cd Frontend/vite-project
npm install
npm run dev
```

Vite will print the local development URL in the terminal, normally `http://localhost:5173`.

## Available scripts

### Backend

From `Backend/`:

```bash
npm run dev       # Start the backend with Nodemon
```

### Frontend

From `Frontend/vite-project/`:

```bash
npm run dev       # Start the Vite development server
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

## Frontend architecture

The frontend is organized around the following layers:

- **Components and pages** — reusable UI and application screens
- **Navigation** — client-side routing
- **Hooks** — state and API-related logic
- **Contexts** — shared application state, including authentication and AI state
- **Services** — API communication, including authentication requests

Authentication requests use credentials so browser cookies can be sent to the backend when required.

## Backend overview

The backend entry point is `Backend/server.js`. It loads environment variables, initializes the application, connects to the database, and listens on port `3000`.

Backend responsibilities include:

- Authentication and authorization
- Database access through Mongoose
- AI integrations
- File uploads and document processing
- Request validation
- Cross-origin requests and cookie handling

## Development notes

- Run the frontend and backend in separate terminals.
- Keep secrets and local configuration in `Backend/.env`; do not commit them.
- If the frontend cannot reach the backend, verify that the backend is running on port `3000` and that the frontend API configuration points to the correct backend URL.

## Status

KaroAI is under active development. Features, API endpoints, and configuration requirements may change as the project evolves.

## License

No license has been specified yet.
