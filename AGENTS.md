# Repository Guidelines

# Version: Nextjs 16.1.4

## Non-Negotiables
- Do not edit `README.md`.
- Do not add code comments.
- No tests (no frameworks, files, or scripts).

## Project Structure
- `app/`: Next.js App Router, layouts, pages and globals.
- `components/`: Reusable UI components (small, focused, and composable).
- `public/`: Static assets.
- Root configs: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.

### Component Rules
- `app/` only composes pages.
- UI and logic must live in `components/`.
- Prefer domain grouping (`ui`, `sections`, `forms`).
- Components should be pure and single-purpose.

## Commands
- `pnpm dev`
- `pnpm build`
- `pnpm start`
- `pnpm lint`

## Code Style
- 2 spaces indentation.
- TypeScript only (`.ts/.tsx`), no `any`.
- PascalCase for components, camelCase for variables/functions.
- Tailwind grouped utilities, avoid inline styles.

## Security
- Never hardcode secrets. Use `.env.local`.
- Treat all external input as untrusted.
- Avoid `dangerouslySetInnerHTML`.
- Keep sensitive logic server-side.
- Never rely on client-side authorization.
- Do not expose internal errors to users.
- Avoid unnecessary or untrusted dependencies.

## Commits & PRs
- Write in English.
- Be short, clear, and objective.
- Start with: feat, fix, refactor, chore, docs, test, or perf.
- Use imperative mood.
- Describe only what was done, not how.
- exemple: feat: add plate validation
