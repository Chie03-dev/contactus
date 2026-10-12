import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
  children: ReactNode;
}

/** Standard page section: hairline top border, mono eyebrow → h2 → lede. */
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
        "scroll-mt-28 border-t border-line py-24 md:py-32",
        className,
      )}
    >
      <Container>
        <header className="max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.015em] text-ink sm:text-4xl">
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
              {lede}
            </p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
