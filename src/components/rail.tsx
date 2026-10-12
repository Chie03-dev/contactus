import { INDEX_ITEMS, focusRing, underlineLink } from "@/components/ui/link";

/**
 * Desktop contents rail: sticky down the left edge, roman-numeral index,
 * hairline on its right border. Pure links — no scroll listeners, no JS.
 */
export function Rail() {
  return (
    <aside className="sticky top-0 hidden h-screen w-48 shrink-0 border-r border-rule lg:block xl:w-56">
      <nav
        aria-label="Index"
        className="flex h-full flex-col justify-between px-8 py-16 xl:px-10"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            Contents
          </p>
          <ul className="mt-6 space-y-4">
            {INDEX_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`group flex items-baseline gap-3 font-mono text-sm uppercase tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-standard hover:text-accent-deep ${focusRing}`}
                >
                  <span
                    aria-hidden
                    className="w-7 text-rule-strong transition-colors duration-200 group-hover:text-accent"
                  >
                    {item.num}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#contact" className={underlineLink}>
          Request a quote
          <span aria-hidden> →</span>
        </a>
      </nav>
    </aside>
  );
}
