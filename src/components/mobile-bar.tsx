import { INDEX_ITEMS, focusRing } from "@/components/ui/link";

/**
 * Mobile anchor bar: fixed to the bottom edge (thumb reach), mono small caps,
 * horizontally scrollable. The whole page stays a single scroll — no
 * hamburger, no JS.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink bg-paper/95 backdrop-blur lg:hidden">
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
            <span aria-hidden className="text-rule-strong">
              {item.num}
            </span>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
