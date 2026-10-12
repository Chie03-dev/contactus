import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";
import { DoodleStar } from "@/components/ui/doodles";

/** Newspaper-style masthead on a thick ink rule, with a doodle star. */
export function Masthead() {
  return (
    <div className="border-b-[3px] border-ink">
      <Container className="flex items-center justify-between gap-4 py-3">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink">
          Rate Card{" "}
          <span aria-hidden className="text-accent">
            №
          </span>{" "}
          01
          <DoodleStar className="h-3 w-3 text-accent" />
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
