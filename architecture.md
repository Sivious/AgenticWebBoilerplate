# Project Architecture & Coding Standards (V1.0)

## 1. System Role & Authority
This document is the "Source of Truth" for all code generation. The AI must cross-reference this file before creating any logic, component, or service. Strict adherence to these patterns is mandatory to maintain boilerplate integrity.

---

## 2. Core Technical Stack
**Strict Enforcement:** Do not introduce new dependencies unless explicitly requested.
- **Language:** TypeScript (Strict Mode)
- **Architecture:** 3-Tier Layered Pattern (Presentation, Service, Data)
- **Styling:** Tailwind CSS (Utility-first)
- **Component Library:** Shadcn/UI (Radix-based)
- **State Management:** Zustand (Global) & TanStack Query (Server State)
- **Validation:** Zod (Schema-based validation)

---

## 3. Layer Responsibilities (3-Tier Pattern)
1. **Presentation Layer (UI):** Focused on user interaction and data display. Must NOT contain business rules or direct data-fetching logic.
2. **Service Layer (Logic):** The "Brain". Handles data transformation, business validations, and orchestrates the flow between the UI and the Data layer.
3. **Data Access Layer (Persistence):** Responsible for API calls, database queries, or external integrations. Must return typed Promises.

---

## 4. Nomenclature & Conventions
- **Components:** `PascalCase.tsx` (e.g., `UserCard.tsx`)
- **Logic Files:** `kebab-case.ts` (e.g., `auth-service.ts`)
- **Variables/Functions:** `camelCase`
- **Constants/Enums:** `SCREAMING_SNAKE_CASE`
- **Interfaces/Types:** `PascalCase` (e.g., `interface UserProfile`)

---

## 5. The "Golden Rules" for AI Generation
1. **Early Returns:** If a condition is not met, return immediately (Guard Clauses). Avoid deep `if/else` nesting.
2. **No Magic Values:** Use constants or Enums for roles, statuses, and configuration.
3. **Type Safety:** All data must be strictly typed. The use of `any` is forbidden; use `unknown` or proper Generics.
4. **Composition:** Build complex UIs by composing smaller, single-responsibility components.
5. **DRY vs AHA:** Avoid Hasty Abstractions. Prioritize readability and clear logic over premature DRY (Don't Repeat Yourself) patterns.

---

## 6. Interaction Protocol for AI
Before writing code, the AI must:
1. Ensure the logic is separated into the appropriate Layer (UI, Service, or Data).
2. Verify that all functions and components follow the naming conventions in Section 4.
3. Validate that no new libraries are being suggested if the current Stack in Section 2 can handle the task.

## 7. Directory Structure
The project follows a **Folder-by-Feature** (Domain-driven) organization. All feature-specific logic must be encapsulated within its own directory under `features/`.

```bash
src/
├── core/              # Global configuration
├── shared/            # Reusable UI, Utils
│   ├── components/    # Atomic UI
│   └── utils/         # Pure functions
└── features/          # Domain-specific modules
    └── [feature-name]/
        ├── components/
        ├── services/
        └── index.ts