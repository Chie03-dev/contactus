# DESIGN.md — Rate Card token sheet

A printed rate card, not a landing page. Warm paper, near-black ink, one
vermillion accent. Display serif + body serif + mono for data. This file is
the visual contract: components use these tokens and rules, nothing ad-hoc.

## Mood

- The page behaves like a printed studio rate card: masthead, rules, dotted
  leaders, roman-numeral sections, colophon. It should feel considered and
  permanent, not like a SaaS funnel.
- Cartoon-paper craft layer: the sheet is a *physical object*. Paper grain and
  crumple shading sit behind everything; items are taped, cut out, stamped,
  and marked like a working rate card on a studio wall. Warm and confident —
  never clip-art cute.
- Print discipline: no rounded corners (except the small circular Q/step
  badges), no blurred shadows, no gradients, no glow. Depth = thick ink
  borders + hard offset shadows.
- No decorative icons, no emoji, no stock imagery. Marks are mono glyphs
  (`§ № › + →`) and hand-drawn doodles (arrow, star, circle, underline).

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
| `--color-marker` | `#ffe27a` | Highlighter swipe behind emphasized words (functional only) |

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
| Hand | Caveat 500/700 | `font-hand` |

Hand font is for **margin notes only** (annotations, stamps, asides) — never
for prices, labels, or UI text.

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
- Outer shell: `max-w-6xl` (1152px) single content column (`mx-auto`). No
  side rail — section navigation lives in the sticky pill navbar.
- Rules: `border-rule` hairlines between every row; `border-[3px] border-ink`
  under group headers (the "bold rule" of print). Masthead sits on a 3px ink
  rule.

## Cutout & paper-craft system

- **Page frame**: the whole sheet sits in a 3px ink border with a small page
  margin (`m-2 sm:m-3`), like a printed page on a desk.
- **Texture**: `.paper-grain` (tiled fractal noise, ~7% opacity) and
  `.paper-crumple` (four faint shading blobs + two crease lines) are fixed,
  behind the frame, `pointer-events: none`. Never place texture above text.
- **Cutout**: 2.5px ink border + 5px hard offset shadow (`.cutout`,
  `.shadow-hard`; accent shadow `.shadow-hard-accent` for primary buttons).
  Hover lifts the cutout 2px toward the viewer (transform only, 150ms — the
  shadow travels with it). Press sinks 1px.
- **Tape** (`.tape`): translucent accent-tinted washi strip with dashed torn
  edges, holding the at-a-glance price tags, the featured tier rows, the
  Phone row, and the colophon box.
- **Marker** (`.marker`): highlighter swipe behind the lower ~75% of a word —
  used on the hero's emphasized phrase and featured tier names only.
- **Stamp** (`.stamp`): double-bordered vermillion label, rotated 2–3° —
  "Most requested" (hand font) and "Starting estimates" (mono). One stamp
  per purpose, never more than one visible per section.
- **Doodles** (`ui/doodles.tsx`): hand-drawn arrow, star, circle, underline
  in wobbly strokes. Max one doodle per component, always pointing at or
  marking something meaningful. Never decorative-only filler.
- **Rotation**: ±1° on the at-a-glance tags; 2–3° on stamps; nothing else.
- **Hand notes**: one per major section, in Caveat, always additive
  encouragement ("no hidden fees, promise"), never repeating body copy.

## Motion

- Nearly none — paper doesn&apos;t move. Allowed: 150ms cutout lift (transform
  + shadow travel), 150–200ms color transitions, the FAQ `+` glyph rotating
  45° when open, tape/stamp static tilts, and CSS smooth scrolling.
- No entrance animations, no parallax. `prefers-reduced-motion: reduce`
  disables all transitions and smooth scrolling; the sheet stays fully static
  and readable.

## Component specs

### Header pill (`nav-bar.tsx`)

The only header: one sticky cutout pinned just inside the page frame
(`sticky top-2 sm:top-3`), centered at `max-w-5xl`, vermillion hard shadow.
Two rows in a single object — never two competing bars:

- **Nav row:** ₱ mark in an ink square → "RATE CARD № 01" (mono, hidden below
  `sm`) → ink divider → roman-numeral section links I–IV (mono small caps;
  the strip is `overflow-x-auto` with hidden scrollbars below `sm`) → "Get a
  quote →" cutout button (hidden below `sm`).
- **Date row:** 2px ink rule above; left "Alchie Andilab — Web, Mobile &
  Systems Developer" (role hidden below `sm`, truncated), right "Manila, PH ·
  MMXXVI", both mono ~11px uppercase muted.

No hamburger, no JS, no separate masthead.

### Hero (`hero.tsx`)

Mono eyebrow (accent-deep) → oversized display headline with italic emphasis
→ Newsreader lede → mono spec line (` · `-separated facts) → two underlined
mono links ("View pricing ↓", "Get a quote →"). No card, no glow, no grid.
The pricing sheet begins immediately below.

### Pricing (`pricing.tsx` + `tier-row.tsx`)

- Group header: roman numeral (mono, accent) + group name (display) left,
  tagline (mono small caps, muted) right, `border-b-[3px] border-ink` rule.
- Tier rows are taped cutouts (2.5px ink border + hard shadow, `paper-2`
  fill, 20px gap). Row = name (+ marker swipe + "Most requested" stamp for
  featured) and `Delivery — timeline · unit` (mono, muted) on the left; price
  flush right under a mono "Starting at" label; featured price in accent.
- Scope in a native `<details>`: summary is a mono "Scope +" toggle; open
  state reveals the summary sentence plus scope bullets in a 2-column list
  with mono `›` marks.
- Each row ends with an underlined "Get a quote →" link.
- Featured row: wash tape strip, marker swipe on the name, rotated stamp,
  accent price. Exactly one featured row per group.
- Sheet footnote in mono ("* All prices are starting points…") beside the
  rotated "Starting estimates" stamp.
- Data only from `src/content/pricing.ts`.

### Process (`process.tsx`)

Comic panels: 2-column grid of cutout cards (`paper-2`), circular badge with
the step numeral (2.5px ink ring, paper fill), display step title, one serif
line. First panel gets a doodle star. One hand note under the grid.

### FAQ (`faq.tsx`)

Native `<details>` index cards (cutouts, `paper-2`), circular "Q" badge,
serif question, `+` glyph that rotates 45° when open, answer in Newsreader
with a hanging indent aligned to the question.

### Contact (`contact.tsx`)

Enquiries ledger: three cutout rows — **Phone** (primary, `tel:` link, taped,
with the rotated "fastest!" hand note), Messenger, Email — mono channel
label, large underlined serif action, dotted leader, mono endpoint (`+63…` /
`m.me` / `mailto`). No form. Below: a full-width "Who you'll work with" card
listing the three-person team (developer marked), then two cutout cards
(paper fill) — "Have this ready for a quote" and "What happens next" — mono
headings with serif lists.

### Footer (`footer.tsx`)

The designed sheet `public/footer.webp` (1859×846) runs **edge to edge**
inside the frame: `next/image`, `w-full h-auto`, so it scales fluidly from
desktop to mobile with no crop and no distortion. A 3px ink rule sits above
it. All text the old colophon carried (name, role, team, disclaimer) lives
in the image and its alt text; the disclaimer is also present as real text
in the pricing footnote, and the team is listed in the contact section.

## Placeholder policy

- Contact placeholders stay flagged `TODO:REPLACE` in `src/lib/site.ts` and
  must never be rendered as visible text (endpoints are shown as mono
  channel names, not values).
- Seeded prices stay `TODO`-reviewable with the footer disclaimer.
