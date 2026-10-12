---
name: taste
description: Design judgment rules for this project — how to avoid generic AI aesthetics and produce a deliberate, hand-crafted paper rate card. Consult before writing any component, layout, or styling decision.
---

# Taste — design judgment rules

Every visual decision in this project must pass these rules. When in doubt,
choose the more restrained option.

## 1. One accent, used sparingly

- Exactly **one** vivid accent color exists (vermillion, defined in
  `DESIGN.md`). It marks the *primary* action and the *most requested* item —
  nothing else. Marker yellow is a functional highlighter, not a second
  accent.
- Everything else is neutral ink on warm paper. Gradients are forbidden; the
  only permitted color mixing is the tape tint and marker swipe.
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
- Section headers: mono eyebrow → large display-serif title → short muted
  lede. Keep the lede to one or two lines.

## 4. Honest spacing scale

- Use the spacing scale in `DESIGN.md` (4px base). No ad-hoc pixel values in
  components. Section rhythm is consistent: `py-24 md:py-32`.
- Generous but tight: dense where data lives (cards, lists), airy where the eye
  rests (hero, section gaps).

## 5. Cartoon-paper craft, with discipline

The rate card is a physical object on a wall. Devices are functional, not
filler:

- **Cutout** = 2.5px ink border + 5px hard offset shadow (ink or accent,
  never blurred). This is the depth system.
- **Tape** holds things: at-a-glance tags, featured rows, the WhatsApp row,
  the colophon. One tape per item, rotated nothing.
- **Marker** swipe highlights one emphasized word per card — the hero phrase
  and featured tier names. Nothing else.
- **Stamps** (double border, rotated 2–3°) carry one key label: "Most
  requested", "Starting estimates". Max one stamp per section.
- **Doodles** (arrow/star/circle/underline, wobbly strokes) point at
  something meaningful or mark the active item. Max one per component. No
  decorative filler.
- **Hand font** (Caveat) writes margin notes only: encouragement like "no
  hidden fees, promise". Never prices, labels, or UI text.
- Paper texture is *behind* everything: grain ≈7% opacity, faint crumple
  shading, two creases. If you can see the grain as noise rather than feel
  it as paper, it is too strong.
- Rotation budget: ±1° on price tags, 2–3° on stamps, nothing else. If more
  than three elements on screen are tilted, it is a scrapbook, not a rate
  card.

## 6. No generic-AI tells

Banned outright:

- Purple→blue gradient hero backgrounds, glassmorphism cards floating over
  blobs, neon glows on everything.
- Emoji as iconography; decorative icon sets from a CDN.
- Identical three-column "feature card" grids with icon + title + two lines,
  repeated section after section.
- Centered hero, centered section title, centered everything.
- Soft/blurred `box-shadow` stacks for "depth" — this design uses hard offset
  shadows on cutouts, hairline rules, and background steps. Rounded corners
  and gradients are also banned: print.
- Stock-photo people shaking hands.

## 7. Motion serves comprehension

- Follow the `emil-kowalski` skill. Animate transform/opacity only, 150ms for
  the cutout lift, standard easing. The sheet barely moves — that is the
  point.
- No animation exists purely to look busy. If removing a motion changes
  nothing for understanding, remove it.

## 8. Accessibility is part of taste

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text) against its actual background.
- Visible focus states on every interactive element; never remove outlines
  without replacing them.
- Semantic HTML first (`header/main/nav/section/article/footer`, real buttons
  and links, labeled form controls). Headings never skip levels.
- Respect `prefers-reduced-motion`.

## 9. Content honesty

- Prices, timelines, and scope are stated plainly with "starting at" language
  where a range would be dishonest. No fake urgency (no countdowns, no
  "3 spots left").
- Placeholder contact data must stay visibly flagged (`TODO:REPLACE`) until the
  user replaces it — never invent real-looking details.
