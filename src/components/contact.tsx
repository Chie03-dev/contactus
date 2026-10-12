import { site } from "@/lib/site";

import { Section } from "@/components/ui/section";
import { ctaClass } from "@/components/ui/button";

const NEXT_STEPS = [
  "I reply within 1 business day.",
  "Short discovery call (30 minutes, free).",
  "Fixed scope, price, and timeline in writing.",
];

/** What to have ready so a quote can be produced in one pass. */
const QUOTE_PREP = [
  "The goal of the project and who it is for",
  "Must-have features versus nice-to-haves",
  "Your deadline and comfortable budget range",
];

const linkNoteClass =
  "mt-2 text-xs leading-relaxed text-ink-muted";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s talk about your project"
      lede="This site is informational — send a message on whichever channel you prefer and I will take it from there. WhatsApp gets the fastest reply."
    >
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-muted">
            Direct channels
          </h3>
          <div className="mt-4 grid gap-3">
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I would like a quote for my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass("primary")}
            >
              WhatsApp
            </a>
            <a
              href={`https://m.me/${site.messenger}`}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClass("ghost")}
            >
              Messenger
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`}
              className={ctaClass("ghost")}
            >
              Email me
            </a>
          </div>
          <p className={linkNoteClass}>
            Typical reply time: within 1 business day, 9am–6pm PHT.
          </p>
        </div>

        <div className="grid content-start gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-card border border-line bg-surface p-6">
            <h3 className="text-sm font-semibold text-ink">
              Have this ready for a quote
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {QUOTE_PREP.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-0.5 font-mono text-accent">
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-surface p-6">
            <h3 className="text-sm font-semibold text-ink">
              What happens next
            </h3>
            <ol className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-muted">
              {NEXT_STEPS.map((step) => (
                <li key={step} className="flex gap-2.5">
                  <span aria-hidden className="mt-0.5 font-mono text-accent">
                    ›
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
