import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Date line under the pill nav: author left, place + year right. */
export function Masthead() {
  return (
    <div className="border-b-[3px] border-ink">
      <Container className="flex items-center justify-between gap-4 py-3">
        <p className="min-w-0 truncate font-mono text-xs uppercase tracking-[0.14em] text-ink">
          {site.name}
          <span className="hidden sm:inline"> — {site.role}</span>
        </p>
        <p className="shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
          Manila, PH · MMXXVI
        </p>
      </Container>
    </div>
  );
}
