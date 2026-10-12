# DESIGN.md — token sheet

Dark-premium, "developer-grade" single-page pricing site. This file is the
visual contract: components must use these tokens and rules, not ad-hoc values.

## Mood

- Dark canvas like a well-configured terminal. Calm, precise, expensive.
- One vivid accent marks *action* and *the most requested item* only.
- Mono is used for data (prices, eyebrows, numbers, timelines); sans carries
  prose. No emoji, no decorative icons, no gradients.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#0a0e14` | Page background |
| `--color-surface` | `#10151f` | Cards, form, terminal block |
| `--color-surface-2` | `#161d2a` | Hover/elevated surface steps |
| `--color-surface-accent` | `color-mix(in oklab, var(--color-accent) 7%, var(--color-surface))` | Featured tier card fill |
| `--color-ink` | `#e8ecf3` | Primary text |
| `--color-ink-muted` | `#9aa7bb` | Secondary text (≥ 7:1 on canvas/surface) |
| `--color-accent` | `#3de5a0` | The one accent: CTAs, links, featured border, focus ring |
| `--color-accent-ink` | `#04120c` | Text on accent fills |
| `--color-line` | `#1c2433` | Default borders/hairlines |
| `--color-line-strong` | `#2a3547` | Hover borders, emphasized dividers |

Contrast floor: body/muted text ≥ 4.5:1 (actual: 8–12:1); large text ≥ 3:1.
The accent is never used as a background behind muted text.

## Typography

System stacks only (no web-font fetch — keeps the static build offline-safe and
fast).

- Sans: `--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Mono: `--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`

Scale (desktop → mobile), tight tracking on display sizes:

| Role | Size / line-height | Weight / tracking |
|---|---|---|
| Display (h1) | 48–56px / 1.05 → 34px mobile | 650, -0.02em |
| Section title (h2) | 32px / 1.15 → 26px | 650, -0.015em |
| Card title (h3/h4) | 20px / 1.25 | 600 |
| Body | 16px / 1.65 | 400 |
| Small | 14px / 1.55 | 400 |
| Mono eyebrow/label | 12px / 1.2 | 500, +0.08em, uppercase |
| Price | 30–36px / 1.1 mono | 600, -0.01em |

## Spacing & layout

- 4px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128. Sections:
  `py-24` mobile / `py-32` desktop. Cards pad 24px (`p-6`).
- Max content width 1152px (`max-w-6xl`), page gutter 20px / 32px (`px-5 sm:px-8`).
- Section anchor offset: `scroll-mt-24` on every section (sticky header ≈ 104px
  with the mobile anchor strip).

## Radii, borders, elevation

- `--radius-card: 1rem` (cards, form, terminal block). Buttons/chips: `rounded-full`.
- Borders: 1px `--color-line`; featured card uses accent border.
- Elevation is background steps + hairline top highlight, not shadow stacks.
  Allowed shadow (form/terminal only): `0 24px 48px -24px rgba(2, 6, 12, 0.7)`.

## Motion tokens

- Durations: 150ms (press), 200ms (hover), 250ms (reveal/entrance). Exits are
  faster than entrances.
- Easing: `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`,
  `--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1)`.
- Card hover: `translateY(-2px)` + border-color to `--color-line-strong`, 200ms.
- Featured-card badge and link arrows may shift 2–3px on hover.
- Reveal (below-fold cards/steps): opacity + `translateY(10px)`, 250ms,
  `ease-out-quint`, stagger 60ms per index via inline `animation-delay`.
- `prefers-reduced-motion: reduce` disables all transforms/keyframes/scroll
  behavior; content static and fully visible.
- Focus: 2px `--color-accent` outline, offset 2px, on `:focus-visible` only.

## Component specs

### Header

- Sticky, full width, `bg-canvas/80` + `backdrop-blur`, 1px bottom hairline.
- Row: mono brand wordmark (left), anchor links `Pricing · Process · FAQ ·
  Contact` (desktop), primary CTA "Get a quote" → `#contact`.
- Mobile (< 768px): second row of the same anchors, horizontally scrollable,
  mono small caps; no hamburger, no JS.

### Hero

- Left-aligned, two columns ≥ 1024px. Mono eyebrow (accent dot + "Transparent
  PHP pricing"), h1, one-paragraph lede, two CTAs (primary "View pricing",
  ghost "Get a quote").
- Right column: terminal-style block (`--color-surface`, mono, hairline, top
  row of three muted dots). Faint background grid + single radial accent glow;
  both static, no animation.
- Trust strip under CTAs: three mono facts, e.g. "Fixed scope up front" /
  "Milestone billing" / "You own the code".

### Pricing

- Groups: Web (3 tiers), Mobile (2 tiers, `sm:grid-cols-2`), Systems
  (3 tiers incl. retainer, `sm:grid-cols-2 lg:grid-cols-3`).
- Tier card anatomy, top to bottom: optional featured badge → tier name (h4) →
  "starting at" mono label + price (mono, 30–36px) + unit → one-line summary →
  scope list (4–6 items, mono "›" bullets in accent) → timeline row (mono,
  "Delivery — 1–2 weeks") → bottom CTA link "Get a quote" with arrow.
- Featured tier: accent border, `--color-surface-accent` fill, badge "Most
  requested". Exactly one featured tier per group, max three per page.
- All data comes from `src/content/pricing.ts`; components render only.

### Process

- Four steps on a row (≥ 768px), each: mono number `01–04` (accent on the
  first), step title, one-line description. Hairline top border per step
  suggests a track; no connecting graphics.

### FAQ

- Native `<details>`; summary contains the question as `h3`.
- Plus glyph in mono that rotates 45° when open (transform only, 150ms).
- Borders between items (`--color-line`), generous tap targets.

### Contact

Two columns ≥ 1024px. Left: three direct-channel buttons — WhatsApp (primary),
Messenger and Email (ghost), each a real external link with `target="_blank"
rel="noopener noreferrer"` (email is `mailto:`), plus a reply-time note. Right:
two stacked cards on `--color-surface` — "Have this ready for a quote" (goal,
must-haves, deadline/budget) and "What happens next" (reply in 1 business day →
30-min discovery call → fixed quote in writing). No form: the site is
informational and fully static, so nothing is submitted anywhere.

### Footer

- Brand, anchor links, GitHub link, disclaimer: "Prices are starting estimates;
  final scope and quote are confirmed after discovery." + dynamic year.

## Placeholder policy

- Every contact value and all prices are seeds. `src/lib/site.ts` holds
  `TODO:REPLACE` markers that must survive in code until the user swaps them.
- The footer disclaimer stays regardless of price edits.
