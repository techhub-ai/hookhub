# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@spec/SPEC.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack by default)
npm run build    # Production build (Turbopack by default)
npm run start    # Start production server
npx eslint .     # Lint — `next lint` is removed in v16; use ESLint CLI directly
npx next typegen # Generate PageProps/LayoutProps/RouteContext type helpers
```

## Stack

- **Next.js 16.2.1** — App Router, Turbopack by default for both `dev` and `build`
- **React 19.2.4**
- **Tailwind CSS v4** — imported via `@tailwindcss` in CSS, configured via `@tailwindcss/postcss`
- **TypeScript 5** — strict mode, path alias `@/*` → `./*`
- **ESLint 9** — flat config format (`eslint.config.mjs`); legacy `.eslintrc` format is not supported

## Next.js 16 Breaking Changes

**Always read `node_modules/next/dist/docs/` before writing code.** Key breaking changes from earlier versions:

### Async-only Request APIs

`cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are now **async-only** — synchronous access is fully removed. Always `await` them:

```tsx
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
}
```

### `middleware` → `proxy`

`middleware.ts`/`middleware.js` is deprecated. Use `proxy.ts`/`proxy.js` and rename the export from `middleware` to `proxy`. Note: `proxy` runs on Node.js only (no `edge` runtime). Use `middleware` if you need `edge` runtime.

### `next lint` removed

`next build` no longer runs linting. Use `npx eslint .` or `npx eslint <path>` directly.

### Parallel Routes require `default.js`

All parallel route slots (`@slot/`) must have an explicit `default.js`/`default.tsx`. Builds fail without them.

### Removed APIs

- `serverRuntimeConfig` / `publicRuntimeConfig` — use `process.env` in Server Components or `NEXT_PUBLIC_` prefix for client-accessible vars
- `useAmp` / AMP support — fully removed
- `experimental.dynamicIO` — renamed to top-level `cacheComponents: true` in `next.config.ts`
- `experimental.turbopack` — moved to top-level `turbopack: {}` in `next.config.ts`
- `devIndicators.appIsrStatus`, `buildActivity`, `buildActivityPosition` — removed

### Instant Client-Side Navigation

For routes that should navigate instantly with Cache Components enabled, export `unstable_instant` and ensure all uncached data is wrapped in `<Suspense>`. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.
