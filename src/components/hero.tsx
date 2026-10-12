import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const FACTS = [
  "Fixed scope, quoted up front",
  "Milestone billing",
  "You own the code",
];

const TERMINAL_LINES: { text: string; tone?: "muted" | "accent" }[] = [
  { text: "package        Web App", tone: "muted" },
  { text: "starting at    ₱90,000", tone: "accent" },
  { text: "timeline       3–6 weeks", tone: "muted" },
  { text: "payment        50% up front, milestone-based", tone: "muted" },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Static backdrop: faint engineering grid + one soft accent glow. */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--color-accent),transparent_65%)] opacity-[0.07]"
      />

      <Container className="relative py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              Transparent PHP pricing · Philippines
            </p>
            <h1
              id="hero-title"
              className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl"
            >
              Transparent pricing for Philippine web, mobile &amp; systems
              development
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Landing pages, business sites, cross-platform apps, and internal
              systems — scoped and priced before a single line of code. No
              day-rate guessing, no surprise invoices.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#pricing">View pricing</ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Get a quote
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
              {FACTS.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">
                    ›
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          {/* Terminal-style quote preview. */}
          <div className="rounded-card border border-line bg-surface p-5 shadow-[0_24px_48px_-24px_rgba(2,6,12,0.7)]">
            <div aria-hidden className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            </div>
            <p className="mt-4 font-mono text-sm text-ink-muted">
              <span aria-hidden className="text-accent">
                $
              </span>{" "}
              quote --service=web-app
            </p>
            <div className="mt-3 space-y-1.5 font-mono text-sm">
              {TERMINAL_LINES.map((line) => (
                <p
                  key={line.text}
                  className={
                    line.tone === "accent"
                      ? "text-accent"
                      : "text-ink-muted"
                  }
                >
                  {line.text}
                </p>
              ))}
            </div>
            <p className="mt-4 border-t border-line pt-4 font-mono text-xs text-ink-muted">
              → full package list in{" "}
              <a
                href="#pricing"
                className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-200 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                #pricing
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
