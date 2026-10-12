import { Container } from "@/components/ui/container";
import { focusRing } from "@/components/ui/link";
import { site } from "@/lib/site";

const COLOPHON_ITEMS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/** Colophon footer inside a cut-and-keep box. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-ink">
      <Container className="grid gap-10 py-14 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-2xl text-ink">{site.name}</p>
          <p className="mt-2 max-w-md font-body leading-relaxed text-ink-muted">
            {site.role}. Based in the Philippines, working with clients
            remotely.
          </p>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink-muted">
            {site.disclaimer}
          </p>
        </div>
        <div className="cutout relative bg-paper p-6">
          <span
            aria-hidden
            className="absolute inset-2 border border-dashed border-rule-strong"
          />
          <div className="relative font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-ink-muted">
            <p>Set in Instrument Serif, Newsreader &amp; IBM Plex Mono</p>
            <p className="mt-2">Rate card v1.0 · ₱ · MMXXVI</p>
            <p className="mt-2">
              © {year} {site.name} ·{" "}
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-ink underline decoration-ink decoration-2 underline-offset-4 transition-colors duration-200 ease-standard hover:text-accent-deep ${focusRing}`}
              >
                GitHub
              </a>
            </p>
            <nav aria-label="Footer" className="mt-4 flex gap-5">
              {COLOPHON_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-ink-muted transition-colors duration-200 ease-standard hover:text-accent-deep ${focusRing}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
