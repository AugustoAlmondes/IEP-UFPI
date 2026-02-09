# IEP — Sistema de Informação (UFPI)

Front-end application for the IEP course project at UFPI. Built with React, TypeScript and Vite as a lightweight, fast development and build setup. This repository contains the client-side code and tooling for the information system prototype.

## Key features
- React + TypeScript for type-safe UI development
- Vite for fast HMR and builds
- ESLint + recommended TypeScript rules
- Opinionated project structure for scalability

## Getting started

Prerequisites:
- Node.js (16+ recommended)
- npm or yarn

Install dependencies:
```bash
npm install
# or
yarn
```

Run in development:
```bash
npm run dev
# or
yarn dev
```

Build for production:
```bash
npm run build
# or
yarn build
```

Preview production build locally:
```bash
npm run preview
# or
yarn preview
```

Linting:
```bash
npm run lint
# or
yarn lint
```

## Recommended scripts (package.json)
- dev: start Vite dev server
- build: produce optimized production build
- preview: preview the production build locally
- lint: run ESLint
- format: run prettier (if configured)
- test: run unit tests (if configured)

## Project structure (example)
- src/
  - main.tsx — app entry
  - App.tsx — root component
  - pages/ — route views
  - components/ — reusable UI components
  - hooks/ — custom React hooks
  - services/ — API clients and data access
  - styles/ — global styles and tokens
- public/ — static assets
- index.html
- tsconfig.json
- vite.config.ts
- eslint.config.js

## Configuration notes
- Use type-aware ESLint rules for better TypeScript linting (see tsconfig.project references).
- If you want to enable the React Compiler or alternative fast refresh implementations, follow official React/Vite docs.

## Contributing
- Follow the existing code style and run linter before commits.
- Create feature branches and open PRs with a clear description and testing steps.

## License
Specify your license here (e.g., MIT) or follow your institution's guidelines.

For questions or setup issues, open an issue in this repository.
