# Vite React Boilerplate

A modern React boilerplate powered by Vite, featuring authentication, API integration, UI components, form handling, internationalization, testing, and code quality tools.

## Tech Stack

- **React**: UI library for building user interfaces.
- **Vite**: Fast build tool and development server.
- **react-router**: Routing for single-page applications.
- **openAPI**: Type-safe API client generation and usage via `openapi-fetch` and `openapi-react-query`.
- **better-auth**: Authentication client for sign in, sign up, password reset, and social login.
- **shadcn/ui**: Accessible, customizable UI components (see `src/components/ui`).
- **react-hook-form**: Form state management and validation (see `src/components/form`).
- **i18next**: Internationalization and localization (see `src/i18n`).
- **eslint**: Linting for code quality and consistency.
- **prettier**: Code formatting.
- **vitest**: Unit and component testing (see `src/test`).
- **husky**: Git hooks for enforcing code quality on commit.

## Project Structure

- `src/components/ui/`: shadcn/ui components (Button, Card, Select, etc.)
- `src/components/form/`: Forms using react-hook-form and zod validation
- `src/lib/api-client.ts`: openAPI client setup
- `src/lib/auth.ts`: better-auth client setup
- `src/i18n/`: i18next configuration
- `src/routes/`: App routes using react-router
- `src/test/`: Example tests using vitest

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `test`: Run tests with vitest
- `lint`: Run eslint
- `format`: Run prettier

## Getting Started

1. Install dependencies
2. Copy and configure environment variables
3. Run `pnpm dev` or `npm run dev`

## Better-auth client setup

This project automatically wires better-auth to your better-auth server instance. You need to provide the base api url of your server e.g `http://localhost:3000`. Depending on your server implementation, better-auth should match the correct routes.

You can take a look at example better-auth server project with hono here

https://github.com/berkerdemirer/hono-boilerplate

## License

MIT
