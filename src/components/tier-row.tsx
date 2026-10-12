import type { PriceTier } from "@/content/pricing";

import { cn } from "@/lib/utils";
import { focusRing, underlineLink } from "@/components/ui/link";

interface TierRowProps {
  tier: PriceTier;
}

/**
 * One rate-card entry, taped to the page as a cutout: thick ink border, hard
 * shadow, name + delivery on the left, price flush right. Scope lives in a
 * native <details>. Featured entries get a marker swipe, a stamp, and tape.
 */
export function TierRow({ tier }: TierRowProps) {
  return (
    <article
      data-tier={tier.id}
      className={cn(
        "lift cutout shadow-hard relative mb-5 bg-paper-2 pr-1",
        tier.featured && "bg-paper-2",
      )}
    >
      {tier.featured ? <span aria-hidden className="tape left-8" /> : null}

      <div className="grid gap-2 px-5 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-8">
        <div className="min-w-0">
          <h4 className="flex flex-wrap items-baseline gap-x-3 font-display text-2xl leading-tight text-ink">
            <span className={tier.featured ? "marker" : undefined}>
              {tier.name}
            </span>
            {tier.featured ? (
              <span className="stamp -rotate-3 bg-paper px-2 py-0.5 font-hand text-lg font-bold tracking-wide text-accent-deep">
                Most requested
              </span>
            ) : null}
          </h4>
          <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">
            Delivery - {tier.timeline} · {tier.unit}
          </p>
        </div>
        <p className="sm:text-right">
          <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-muted">
            Starting at
          </span>
          <span
            className={cn(
              "font-display text-3xl leading-none",
              tier.featured ? "text-accent" : "text-ink",
            )}
          >
            {tier.price}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 pb-6">
        <details className="group/scope">
          <summary
            className={`cursor-pointer list-none font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-standard hover:text-ink [&::-webkit-details-marker]:hidden ${focusRing}`}
          >
            Scope{" "}
            <span
              aria-hidden
              className="transition-colors duration-200 group-open/scope:text-accent"
            >
              +
            </span>
          </summary>
          <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-ink-muted">
            {tier.summary}
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {tier.scope.map((item) => (
              <li
                key={item}
                className="flex gap-2 font-body text-sm leading-relaxed text-ink-muted"
              >
                <span aria-hidden className="font-mono text-accent">
                  ›
                </span>
                {item}
              </li>
            ))}
          </ul>
        </details>
        <a href="#contact" className={`ml-auto ${underlineLink}`}>
          Get a quote
          <span aria-hidden> →</span>
        </a>
      </div>
    </article>
  );
}
