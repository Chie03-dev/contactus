import { focusRing, underlineLink } from "@/components/ui/link";

const FACTS = [
  "All prices in PHP",
  "Fixed scope, quoted up front",
  "Milestone billing",
  "You own the code",
];

/** At-a-glance entry prices — the rate card's summary strip. */
const GLANCE = [
  { label: "Web", from: "₱15,000" },
  { label: "Mobile", from: "₱60,000" },
  { label: "Systems", from: "₱80,000" },
];

/**
 * Masthead plate: the headline is the page. Mono eyebrow, oversized display
 * serif with an italic emphasis, a mono spec line, and two underlined text
 * links — no buttons, no glow, no grid.
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
        <em className="italic">Philippine web, mobile &amp; systems</em>{" "}
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
        <a href="#pricing" className={`font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-accent decoration-1 underline-offset-4 transition-colors duration-200 ease-standard hover:text-accent-deep ${focusRing}`}>
          View pricing
          <span aria-hidden> ↓</span>
        </a>
        <a href="#contact" className={underlineLink}>
          Get a quote
          <span aria-hidden> →</span>
        </a>
      </div>

      <div className="mt-14 border-t border-rule pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          At a glance — starting at
        </p>
        <dl className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-3">
          {GLANCE.map((item) => (
            <div key={item.label} className="flex items-baseline gap-3">
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                {item.label}
              </dt>
              <span aria-hidden className="leader" />
              <dd className="font-display text-2xl text-ink">{item.from}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
