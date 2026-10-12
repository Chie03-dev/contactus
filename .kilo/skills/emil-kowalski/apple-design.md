# Apple-style interaction design principles

## 1. Every action has a visible, immediate reaction

- The element under the pointer responds within one frame (150ms max): hover
  state, press state, focus ring. Nothing is "dead" to touch.
- Disabled states must look disabled *and* explain why where possible.

## 2. Feedback explains cause and effect

- When something happens (form sent, item toggled), the UI says what happened
  near where it happened — not in a far-away toast for local changes.
- Loading and pending states exist before the result state; never leave a
  control live but silent.

## 3. Restraint over decoration

- One idea per surface. A card that glows, floats, tilts, and has a spotlight
  communicates nothing. Pick the single appropriate affordance.
- Delight lives in details (a perfect easing curve, a 1px highlight on a card
  edge), not in spectacle.

## 4. Depth from rules, not from shadow stacks

- On paper, "raised" means a background step plus a hairline rule — never a
  shadow. Shadows, if ever justified, are soft, dark, and tight
  (`0 24px 48px -24px`).

## 5. State is part of the design

- Design every state: default, hover, active, focus-visible, disabled, loading,
  empty, error. If one is missing, the work is not done.
- Pressed state on primary buttons darkens/lifts slightly — never just stops
  responding.

## 6. Typography and spacing carry the polish

- Tight tracking on large headings (-0.02em), comfortable line-height on body
  copy (1.6–1.7), consistent optical alignment.
- Numbers in tabular contexts (prices) are set in mono so columns align and the
  "engineering" texture stays consistent.

## 7. Motion with intent

- Animate to maintain context: things enter from where they belong, exit toward
  where they came from. Random slide-ins from off-screen are noise.
- Duration and easing stay consistent across the whole product so motion feels
  like one system, not a collection of effects.
