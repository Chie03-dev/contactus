import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const linkClass =
  "text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const mobileLinkClass =
  "shrink-0 font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/**
 * Sticky header. Pure Server Component — no scroll listeners, no JS state:
 * the mobile anchor strip is a scrollable row instead of a hamburger menu.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full font-mono text-sm font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-ink"
          >
            ₱
          </span>
          {site.name}
        </Link>

        <nav
          aria-label="Sections"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink href="#contact" className="hidden sm:inline-flex">
          Get a quote
        </ButtonLink>
      </Container>

      <div className="border-t border-line md:hidden">
        <Container>
          <nav aria-label="Sections" className="flex gap-6 overflow-x-auto py-2.5">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={mobileLinkClass}>
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
