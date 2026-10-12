# DESIGN.md — Rate Card token sheet

A printed rate card, not a landing page. Warm paper, near-black ink, one
vermillion accent. Display serif + body serif + mono for data. This file is
the visual contract: components use these tokens and rules, nothing ad-hoc.

## Mood

- The page behaves like a printed studio rate card: masthead, rules, dotted
  leaders, roman-numeral sections, colophon. It should feel considered and
  permanent, not like a SaaS funnel.
- Print discipline: zero rounded corners, zero shadows, zero gradients, zero
  glow. Depth comes only from rules (hairlines) and background steps
  (`paper` → `paper-2`).
- No decorative icons, no emoji, no stock imagery. Marks are mono glyphs:
  `§ № › + →`.

## Color

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#f7f3ea` | Page background |
| `--color-paper-2` | `#f0ead9` | Alt row hover, featured row fill |
| `--color-ink` | `#1c1917` | Headlines, body, prices |
| `--color-ink-muted` | `#67614f` | Secondary text (5.6:1 on paper) |
| `--color-accent` | `#c93a1e` | Vermillion: section marks, rules, stamps, featured price |
| `--color-accent-deep` | `#a82f16` | Accent text (6.2:1 on paper) |
| `--color-rule` | `#d8d1bf` | Hairline rules, default borders |
| `--color-rule-strong` | `#b3aa92` | Group rules, dotted leaders, link underlines |

Contrast floor: body/muted/accent text ≥ 4.5:1 (actual 5.6–15.8:1), large
display text ≥ 3:1. Ink (15.8:1) carries all prices; accent appears at large
sizes only; `accent-deep` whenever accent text is small.

## Typography

Three Google fonts loaded via `next/font` (no runtime CDN, no layout shift):

| Role | Family | Utility |
|---|---|---|
| Display | Instrument Serif 400 (regular + italic) | `font-display` |
| Body | Newsreader (variable 200–800) | `font-body` |
| Data | IBM Plex Mono 400/500 | `font-mono` |

Scale (desktop → mobile):

| Role | Size / line-height | Notes |
|---|---|---|
| Masthead h1 | 60–72px / 1.02 | Instrument Serif, italic for the emphasized phrase |
| Section title (h2) | 36–48px / 1.05 | Instrument Serif |
| Group title (h3) | 30–36px | Instrument Serif, roman numeral prefix in mono |
| Tier name (h4) | 24px / tight | Instrument Serif |
| Price | 30px / 1 | Instrument Serif; `text-3xl`, tabular-ish |
| Enquiry ledger links | 24–30px | Instrument Serif, underlined |
| Body | 16–18px / 1.7 | Newsreader |
| Mono labels | 11–12px / 1.4 | IBM Plex Mono, uppercase, `tracking-[0.14em]` |

Emphasis is italic display serif — never bold, never color-only.

## Spacing & layout

- 4px base scale. Sections: `py-24` mobile / `py-32` desktop, horizontal
  padding `px-5 sm:px-8 md:px-12`.
- Outer shell: `max-w-6xl` (1152px) split into a 192–224px sticky contents
  rail (right hairline) + a flexible content column (`min-w-0`). On mobile the
  rail collapses and anchors move to a fixed bottom bar.
- Rules: `border-rule` hairlines between every row; `border-2 border-ink`
  under group headers (the "bold rule" of print). Masthead sits on a 1px ink
  rule.

## Motion

- Nearly none — print doesn't move. Allowed: 150–200ms color transitions on
  hover (rows step to `paper-2`, links shift to `accent-deep`), the FAQ `+`
  glyph rotating 45° when open, and CSS smooth scrolling.
- No entrance animations, no parallax, no transforms on content. Exits and
  hovers never exceed 200ms; easing `cubic-bezier(0.4, 0, 0.2, 1)`.
- `prefers-reduced-motion: reduce` disables all transitions and smooth
  scrolling; the sheet stays fully static and readable.

## Component specs

### Masthead (`masthead.tsx`)

Newspaper top rule: mono small caps — left "Rate Card № 01", center name +
role, right "Manila, PH". 1px ink rule beneath.

### Contents rail (`rail.tsx`) / mobile bar (`mobile-bar.tsx`)

Roman-numeral index (I–IV) in mono; hover moves the numeral to accent.
Desktop: sticky, full height, right hairline, ends with "Request a quote →".
Mobile: fixed bottom bar, `bg-paper/95` + blur, horizontally scrollable.

### Hero (`hero.tsx`)

Mono eyebrow (accent-deep) → oversized display headline with italic emphasis
→ Newsreader lede → mono spec line (` · `-separated facts) → two underlined
mono links ("View pricing ↓", "Get a quote →"). No card, no glow, no grid.
The pricing sheet begins immediately below.

### Pricing (`pricing.tsx` + `tier-row.tsx`)

- Group header: roman numeral (mono, accent) + group name (display) left,
  tagline (mono small caps, muted) right, `border-b-2 border-ink` rule.
- Tier rows separated by hairlines. Row = name (+ "Most requested" stamp for
  featured) and `Delivery — timeline · unit` (mono, muted) on the left; price
  flush right under a mono "Starting at" label.
- Scope in a native `<details>`: summary is a mono "Scope +" toggle; open
  state reveals the summary sentence plus scope bullets in a 2-column list
  with mono `›` marks.
- Each row ends with an underlined "Get a quote →" link.
- Featured row: `border-l-2 border-l-accent`, `paper-2` fill, price in accent,
  stamp in accent-deep. Exactly one featured row per group.
- Sheet footnote in mono: "* All prices are starting points, in Philippine
  pesos." + `site.disclaimer`.
- Data only from `src/content/pricing.ts`.

### Process (`process.tsx`)

Numbered ledger: hanging mono numerals (first in accent, rest `rule-strong`),
display step title, one serif line. Hairline rows, `border-t` on the list.

### FAQ (`faq.tsx`)

Native `<details>` rows with mono "Q." mark, serif question, `+` glyph that
rotates 45° when open, answer in Newsreader with a hanging indent.

### Contact (`contact.tsx`)

Enquiries ledger: three rows (WhatsApp / Messenger / Email) — mono channel
label, large underlined serif action, dotted leader, mono endpoint
(`wa.me` / `m.me` / `mailto`). No form. Below: two hairline-topped columns,
"Have this ready for a quote" and "What happens next", mono headings with
serif lists.

### Footer (`footer.tsx`)

Colophon: name in display serif, disclaimer, and a mono block — "Set in
Instrument Serif, Newsreader & IBM Plex Mono · Rate card v1.0 · ₱ · MMXXVI · ©
year · GitHub" — plus footer anchor links. `pb-20` on mobile clears the
bottom bar.

## Placeholder policy

- Contact placeholders stay flagged `TODO:REPLACE` in `src/lib/site.ts` and
  must never be rendered as visible text (endpoints are shown as mono
  channel names, not values).
- Seeded prices stay `TODO`-reviewable with the footer disclaimer.
