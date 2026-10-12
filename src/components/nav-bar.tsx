import { INDEX_ITEMS, cutoutButtonPrimary, focusRing } from "@/components/ui/link";
import { cn } from "@/lib/utils";

/**
 * Sticky pill navbar — taped to the top of the sheet just inside the page
 * frame. One nav for every viewport: brand mark + roman-numeral section
 * links (scrollable when narrow) + quote button. No JS, no scroll listeners.
 */
export function NavBar() {
  return (
    <header className="sticky top-2 z-50 px-2 sm:top-3 sm:px-3">
      <nav
        aria-label="Index"
        className="cutout shadow-hard-accent mx-auto flex max-w-5xl items-center gap-2 bg-paper px-2.5 py-2 sm:gap-4 sm:px-4"
      >
        <a
          href="#main"
          className={cn(
            "flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink",
            focusRing,
          )}
        >
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center border-2 border-ink bg-ink text-sm font-bold text-paper"
          >
            ₱
          </span>
          <span className="hidden sm:inline">Rate Card № 01</span>
        </a>

        <span
          aria-hidden
          className="hidden h-7 w-0 shrink-0 border-l-2 border-ink sm:block"
        />

        <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-4 overflow-x-auto sm:gap-6">
          {INDEX_ITEMS.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className={cn(
                  "flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-standard hover:text-accent-deep",
                  focusRing,
                )}
              >
                <span aria-hidden className="text-ink">
                  {item.num}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            cutoutButtonPrimary,
            "hidden shrink-0 px-3.5 py-1.5 shadow-hard sm:inline-flex",
          )}
        >
          Get a quote
          <span aria-hidden> →</span>
        </a>
      </nav>
    </header>
  );
}
