/** Hand-drawn doodles: arrows, stars, circles, underlines. Wobbly paths and
 *  round caps keep them feeling drawn, not clip-art. All decorative —
 *  callers wrap them in aria-hidden. */

interface DoodleProps {
  className?: string;
}

export function DoodleArrow({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 60 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6c12 2 24 10 32 24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M26 26c4 1 8 2 10 4M26 26c1 4 1 8 0 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStar({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5c.9 5.9 3.6 8.6 9.5 9.5-5.9.9-8.6 3.6-9.5 9.5-.9-5.9-3.6-8.6-9.5-9.5 5.9-.9 8.6-3.6 9.5-9.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DoodleCircle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 48"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 3c22-2 44 2 55 12 10 9 8 24-2 30-9 6-26 5-39 3-14-2-30-2-41-8C4 32-.5 18 6 10 13 3 38 5 60 3z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleUnderline({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 8c22-5 44 3 66-1 18-3 34 1 50-2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
