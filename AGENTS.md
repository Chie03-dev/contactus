# AGENTS.md — Price (pricing site)

Project instructions for Kilo and any AI agent working in this repo.

## Read first

1. `DESIGN.md` — the visual contract (color/type/spacing/motion tokens and
   per-component specs). All UI decisions come from there.
2. `.kilo/skills/taste/SKILL.md` — design judgment rules (no generic AI
   aesthetics, one accent, mono/sans pairing, hierarchy, a11y floor).
3. `.kilo/skills/emil-kowalski/SKILL.md` (+ `animate.md`, `apple-design.md`) —
   motion and interaction craft. Consult before adding any animation or
   interaction.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript 5 (strict, no `any`) +
  Tailwind CSS 4 (via `@tailwindcss/postcss`; tokens live in `src/app/globals.css`
  under `@theme inline`).
- Utilities: `clsx` + `tailwind-merge` via `cn()` in `src/lib/utils.ts`.
- Static export for GitHub Pages: `output: "export"`, `trailingSlash: true`,
  `images.unoptimized`, `basePath: "/contactus"` (project page at
  https://chie03-dev.github.io/contactus/). This is a purely static,
  informational site: no server runtime, no server actions, no API routes, no
  forms or third-party submission services. Contact happens via WhatsApp /
  Messenger / email deep links.

## Conventions

- Server Components by default; add `"use client"` only where interactivity is
  strictly required. Prefer native HTML (`<details>`, CSS `:hover`, anchors)
  over JS where possible.
- Explicit TypeScript interfaces/types for all component props.
- All pricing and FAQ data lives only in `src/content/*.ts` (typed) — components
  render data, never duplicate literals.
- Site/contact config lives only in `src/lib/site.ts`. `TODO:REPLACE` markers
  must survive until the user swaps in real values; never invent fake contact
  details.
- Semantic HTML: `header/main/section/article/footer`, labeled controls, real
  buttons/links, no skipped heading levels, visible focus states, AA contrast.
- Pricing display uses "starting at" ₱ values with the footer disclaimer.
- No new dependencies without a clear reason; keep the bundle JS-free where
  possible.

## Commands

- Dev: `npm run dev`
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Build (static → `out/`): `npm run build`
- Tests: `npx playwright test` (serves `out/` via `tests/serve.mjs`; run
  `npm run build` first)

## Known TODOs before publishing

- Replace all `TODO:REPLACE` values in `src/lib/site.ts` (email, WhatsApp
  number, Messenger username).
- Review seeded prices in `src/content/pricing.ts` (plan-accepted defaults).
- Deploy repo: https://github.com/Chie03-dev/contactus (GitHub Pages, project
  page at /contactus).
