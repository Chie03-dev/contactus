# Animation rules (Emil Kowalski style)

## Properties

- Animate **only `transform` and `opacity`**. They run on the compositor and
  never trigger layout or paint.
- Never animate `width`, `height`, `top`, `left`, `margin`, `font-size`. If a
  bar needs to "grow", animate `transform: scaleX()` from the correct
  `transform-origin` instead.
- `background-color` and `border-color` are acceptable for cheap hover/pressed
  feedback (paint-only, small area), but never in a loop.

## Duration

- Micro-interactions (hover, press, toggle): **150–200ms**.
- Reveals and entrances: **200–300ms**.
- Anything above 300ms must be a deliberate, scene-like moment — none exist in
  this project.
- Exits are faster than entrances (e.g. 150ms out, 250ms in).

## Easing

- Standard easing curve: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind `ease-in-out`).
- Decelerated entrance/exit quint: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Never use `linear` for UI motion, and never leave the default `ease` on
  multi-property transitions.
- Interactive press feedback uses a slight scale down (0.97–0.98), not a
  shadow change.

## Stagger

- List/card reveals stagger by index: 50–60ms per item, capped so the last item
  never waits more than ~300ms (clamp large lists).
- Set the delay inline (`style={{ animationDelay }}`) or via CSS custom
  property — do not hand-write a keyframe per item.

## Transforms have an origin

- Scale/translate from the edge closest to the trigger (a card grows from where
  the pointer entered; a dropdown scales from its top edge).
- Rows and list items on hover: cutouts lift 2px toward the viewer
  (`translate(-2px, -2px)`, transform only — the hard shadow travels with
  the element), 150ms. Press sinks 1px. Non-cutout links shift color only.

## Reduced motion

- `@media (prefers-reduced-motion: reduce)`: no transforms, no keyframes, no
  scroll-driven motion. Content must be fully visible and static; a fade is the
  only permitted animation (and even that may be omitted).
- Reduced motion is a first-class path, not a fallback hack: the page must read
  perfectly with zero motion.

## Scroll behavior

- Smooth scrolling is enabled via CSS, and automatically disabled under
  reduced motion.
- No scroll-jacking, no parallax, no scroll-driven opacity tricks in this
  project.
