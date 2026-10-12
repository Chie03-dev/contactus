import { INDEX_ITEMS, focusRing } from "@/components/ui/link";

/**
 * Mobile anchor bar: fixed to the bottom edge (thumb reach), mono small caps,
 * horizontally scrollable. Inset inside the page frame. The whole page stays
 * a single scroll — no hamburger, no JS.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-2 bottom-2 z-50 border-[3px] border-ink bg-paper shadow-hard lg:hidden">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-5 py-3"
      >
        {INDEX_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-baseline gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-standard hover:text-accent-deep ${focusRing}`}
          >
            <span aria-hidden className="text-ink">
              {item.num}
            </span>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
