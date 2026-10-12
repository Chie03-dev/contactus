import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Standard printed section: ink rule on top, mono eyebrow with the section
 * mark, display-serif title, serif lede. Padding lives here because sections
 * sit directly inside the content column (no inner container).
 */
export function Section({
  id,
  eyebrow,
  title,
  lede,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 border-t border-rule px-5 py-24 sm:px-8 md:px-12 md:py-32",
        className,
      )}
    >
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.01em] text-ink md:text-5xl">
          {title}
        </h2>
        {lede ? (
          <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
            {lede}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
