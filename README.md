# Modern Agentic Boilerplate

This is a modern web project boilerplate designed to serve as a robust foundation for building scaleable applications with AI agents. It embraces a strict 3-Layer architecture and utilizes modern frontend tooling tailored for high performance and strict type safety.

## 🚀 Technologies and Libraries

The project is built on top of the following stack:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** TypeScript 5 (Strict Mode enforced)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/) (Global)
- **Data Fetching/Server State:** [TanStack React Query](https://tanstack.com/query/latest)
- **Validation:** [Zod](https://zod.dev/)

## 🏗️ Architecture

The project adheres to a **3-Tier Layered Pattern** combined with a **Feature-Driven** folder structure. This ensures separation of concerns and maintainability.

### The 3 Layers
1. **Presentation Layer (UI):** React components responsible for rendering and user interaction. No complex business logic here.
2. **Service Layer (Logic):** Pure functions or custom hooks that handle data transformation and encapsulate business validations.
3. **Data Access Layer (Persistence):** API calls and data fetching, usually managed via React Query.

### Directory Structure

```text
/
├── .tmp/                    # Intermediate AI files (git-ignored)
├── directives/              # Guidelines and Standard Operating Procedures
├── execution/               # Deterministic execution scripts (Python/Node)
├── src/                     # React source code
│   ├── core/                # Global configuration (providers, router config)
│   ├── shared/              # Reusable atoms (components, hooks, utils)
│   └── features/            # Feature-specific modules
│       └── [feature-name]/
│           ├── components/  # Presentation
│           └── services/    # Logic / Data Access
```

---

## 💻 Getting Started

### Installation

1. Ensure you have Node.js installed (v18+ recommended).
2. Clone this repository to your local machine.
3. Install the dependencies:

```bash
npm install
```

### Running the Application

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` (or whichever port Vite provides in the terminal).

## 🐛 Debugging and Verification

### Linting
To check for code quality and TypeScript rules formatting:

```bash
npm run lint
```

### Building for Production
To verify that the application compiles without any TypeScript or Vite build errors:

```bash
npm run build
```

This will run TypeScript type checking (`tsc -b`) and generate the production bundle inside the `dist/` folder. You can preview the production bundle by running:

```bash
npm run preview
```

## 🤖 AI Context
The project contains several guidelines at the root level such as `architecture.md` and `GEMINI.md`. These are directives intended to maintain rules for boilerplate integrity when utilizing AI coding assistants. Do not remove them.
