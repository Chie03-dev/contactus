import {
  cutoutButtonGhost,
  cutoutButtonPrimary,
} from "@/components/ui/link";
import { DoodleStar } from "@/components/ui/doodles";

const FACTS = [
  "All prices in PHP",
  "Fixed scope, quoted up front",
  "Milestone billing",
  "You own the code",
];

/** At-a-glance entry prices — the rate card's summary strip. */
const GLANCE = [
  { label: "Web", from: "₱15,000", tilt: "-rotate-1" },
  { label: "Mobile", from: "₱60,000", tilt: "rotate-1" },
  { label: "Systems", from: "₱80,000", tilt: "-rotate-1" },
];

/**
 * Masthead plate: the headline is the page. Mono eyebrow, oversized display
 * serif with an italic emphasis and a marker swipe, a mono spec line, cutout
 * CTAs, and price-tag cards for the at-a-glance strip.
 */
export function Hero() {
  return (
    <section
      className="px-5 pb-20 pt-16 sm:px-8 md:px-12 md:pb-28 md:pt-24"
      aria-labelledby="hero-title"
    >
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-deep">
        Freelance rate card · Philippines
      </p>
      <h1
        id="hero-title"
        className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-ink sm:text-6xl md:text-7xl"
      >
        Transparent pricing for{" "}
        <em className="marker italic">Philippine web, mobile &amp; systems</em>{" "}
        development
      </h1>
      <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-ink-muted">
        Landing pages, business sites, cross-platform apps, and internal
        systems — scoped and priced before a single line of code. No day-rate
        guessing, no surprise invoices.
      </p>
      <p className="mt-8 font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-ink-muted">
        {FACTS.join("  ·  ")}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
        <a href="#pricing" className={cutoutButtonPrimary}>
          View pricing
          <span aria-hidden> ↓</span>
        </a>
        <a href="#contact" className={cutoutButtonGhost}>
          Get a quote
          <span aria-hidden> →</span>
        </a>
      </div>

      <div className="mt-16">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          At a glance — starting at
          <DoodleStar className="h-3 w-3 text-accent" />
        </p>
        <dl className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-3">
          {GLANCE.map((item) => (
            <div
              key={item.label}
              className={`cutout shadow-hard relative bg-paper-2 px-5 py-4 ${item.tilt}`}
            >
              <span aria-hidden className="tape left-6" />
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                {item.label}
              </dt>
              <dd className="mt-1 font-display text-3xl leading-none text-ink">
                {item.from}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 flex items-center gap-2 font-hand text-xl text-accent-deep">
          no hidden fees, promise
          <DoodleStar className="h-4 w-4 text-accent" />
        </p>
      </div>
    </section>
  );
}
