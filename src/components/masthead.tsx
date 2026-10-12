import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Newspaper-style masthead: ink rule beneath, mono small caps. */
export function Masthead() {
  return (
    <div className="border-b border-ink">
      <Container className="flex items-center justify-between gap-4 py-3">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
          Rate Card{" "}
          <span aria-hidden className="text-accent">
            №
          </span>{" "}
          01
        </p>
        <p className="hidden font-mono text-xs uppercase tracking-[0.14em] text-ink-muted sm:block">
          {site.name} — {site.role}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          Manila, PH
        </p>
      </Container>
    </div>
  );
}
