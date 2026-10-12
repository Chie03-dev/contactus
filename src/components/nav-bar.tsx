import { cutoutButtonPrimary, focusRing } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/**
 * Sticky header pill - one clean row, pinned just inside the page frame:
 * brand mark, section links in plain words, quote button. No numerals, no
 * keeper line, no JS. Scrolls with hidden scrollbars below `sm`.
 */
export function NavBar() {
  return (
    <header className="sticky top-2 z-50 px-2 sm:top-3 sm:px-3">
      <nav
        aria-label="Index"
        className="cutout shadow-hard-accent mx-auto flex max-w-4xl items-center gap-3 bg-paper px-2.5 py-2 sm:gap-5 sm:px-4"
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
          Rate Card
        </a>

        <span
          aria-hidden
          className="hidden h-7 w-0 shrink-0 border-l-2 border-ink sm:block"
        />

        <ul className="no-scrollbar flex min-w-0 flex-1 items-center gap-5 overflow-x-auto sm:gap-7">
          {LINKS.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.12em] text-ink-muted transition-colors duration-200 ease-standard hover:text-accent-deep",
                  focusRing,
                )}
              >
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
