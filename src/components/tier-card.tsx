import type { PriceTier } from "@/content/pricing";

import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TierCardProps {
  tier: PriceTier;
  /** Reveal stagger in milliseconds (60ms per index). */
  delay: number;
}

export function TierCard({ tier, delay }: TierCardProps) {
  return (
    <article
      data-tier={tier.id}
      className={cn(
        "animate-reveal flex flex-col rounded-card border bg-surface p-6 transition-[transform,border-color] duration-200 ease-standard hover:-translate-y-0.5",
        tier.featured
          ? "border-accent/60 bg-surface-accent"
          : "border-line hover:border-line-strong",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {tier.featured ? (
        <p className="mb-4 w-fit rounded-full bg-accent px-2.5 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-accent-ink">
          Most requested
        </p>
      ) : null}

      <h4 className="text-lg font-semibold text-ink">{tier.name}</h4>

      <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
          Starting at
        </span>
        <span className="font-mono text-3xl font-semibold tracking-[-0.01em] text-ink">
          {tier.price}
        </span>
        <span className="font-mono text-xs text-ink-muted">{tier.unit}</span>
      </p>

      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {tier.summary}
      </p>

      <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-ink-muted">
        {tier.scope.map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden className="mt-0.5 font-mono text-accent">
              ›
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-line pt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Delivery — {tier.timeline}
      </p>

      <ButtonLink
        href="#contact"
        variant="ghost"
        className="mt-5 w-full"
      >
        Get a quote
      </ButtonLink>
    </article>
  );
}
