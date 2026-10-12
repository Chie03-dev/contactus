---
name: taste
description: Design judgment rules for this project — how to avoid generic AI aesthetics and produce a deliberate, human, "developer-grade" dark premium look. Consult before writing any component, layout, or styling decision.
---

# Taste — design judgment rules

Every visual decision in this project must pass these rules. When in doubt,
choose the more restrained option.

## 1. One accent, used sparingly

- Exactly **one** vivid accent color exists (mint, defined in `DESIGN.md`). It
  marks the *primary* action and the *most requested* item — nothing else.
- Everything else is neutral ink on dark canvas. Gradients are forbidden; the
  only permitted color mixing is a low-alpha tint of the accent on surfaces.
- If two elements compete for the accent, one of them is wrong.

## 2. Serif display + serif body + mono data, with a job for each

- Body serif (Newsreader) carries prose. Display serif (Instrument Serif)
  carries headlines, with *italic* as the only emphasis — never bold, never
  color-only. Mono (IBM Plex Mono) carries *data*: prices, labels, rules,
  numerals.
- Never set prices in serif-display weight changes or prose in mono. Mono
  labels are uppercase, small, with generous letter-spacing.

## 3. Real hierarchy, not uniform cards

- A section must have a clear dominant element before a reader scans anything
  else. Size, weight, and color each do one job — do not emphasize everything.
- The rate card is a hairline-ruled list with dotted leaders, not a card grid;
  one entry per group may carry the accent rule + "Most requested" stamp and
  the rest stay visually calm so the hierarchy reads.
- Section headers: mono eyebrow → large sans title → short muted lede. Keep the
  lede to one or two lines.

## 4. Honest spacing scale

- Use the spacing scale in `DESIGN.md` (4px base). No ad-hoc pixel values in
  components. Section rhythm is consistent: `py-24 md:py-32`.
- Generous but tight: dense where data lives (cards, lists), airy where the eye
  rests (hero, section gaps).

## 5. No generic-AI tells

Banned outright:

- Purple→blue gradient hero backgrounds, glassmorphism cards floating over
  blobs, neon glows on everything.
- Emoji as iconography; decorative icon sets from a CDN.
- Identical three-column "feature card" grids with icon + title + two lines,
  repeated section after section.
- Centered hero, centered section title, centered everything.
- `box-shadow` stacks for "depth" — this design uses rules and background
  steps instead. Rounded corners and gradients are also banned: print.
- Stock-photo people shaking hands.

## 6. Motion serves comprehension

- Follow the `emil-kowalski` skill. Animate transform/opacity only, 150–300ms,
  standard easing. Reveals stagger by index, not randomly.
- No animation exists purely to look busy. If removing a motion changes
  nothing for understanding, remove it.

## 7. Accessibility is part of taste

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text) against its actual background.
- Visible focus states on every interactive element; never remove outlines
  without replacing them.
- Semantic HTML first (`header/main/nav/section/article/footer`, real buttons
  and links, labeled form controls). Headings never skip levels.
- Respect `prefers-reduced-motion`.

## 8. Content honesty

- Prices, timelines, and scope are stated plainly with "starting at" language
  where a range would be dishonest. No fake urgency (no countdowns, no
  "3 spots left").
- Placeholder contact data must stay visibly flagged (`TODO:REPLACE`) until the
  user replaces it — never invent real-looking details.
