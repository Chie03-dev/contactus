import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

const FOOTER_ITEMS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold text-ink">
            {site.name}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
            {site.role}. Based in the Philippines, working with clients
            remotely.
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-ink-muted">
            {site.disclaimer}
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm">
          {FOOTER_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-muted transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-muted">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          GitHub
        </a>
      </Container>
    </footer>
  );
}
