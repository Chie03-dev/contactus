import { site } from "@/lib/site";

import { Section } from "@/components/ui/section";
import { focusRing, ledgerLink } from "@/components/ui/link";
import { DoodleArrow } from "@/components/ui/doodles";

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

const labelClass =
  "w-24 shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted";

const endpointClass =
  "ml-auto hidden font-mono text-xs uppercase tracking-[0.14em] text-ink-muted sm:block";

/**
 * Enquiries ledger: one taped cutout per direct channel with a dotted leader
 * between the action and its endpoint. No form — the site is informational.
 */
export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="§ Contact"
      title="Let’s talk about your project"
      lede="This site is informational — send a message on whichever channel you prefer and I will take it from there. WhatsApp gets the fastest reply."
    >
      <ul className="mt-14 grid gap-6">
        <li className="cutout shadow-hard relative bg-paper-2">
          <span aria-hidden className="tape left-8" />
          <div className="flex items-baseline gap-4 px-5 py-7">
            <span className={labelClass}>WhatsApp</span>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I would like a quote for my project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={ledgerLink}
            >
              Message on WhatsApp
            </a>
            <span aria-hidden className="leader" />
            <span className={endpointClass}>wa.me</span>
          </div>
          <p className="absolute -right-2 -top-3 rotate-6 font-hand text-lg font-bold text-accent-deep">
            fastest! <DoodleArrow className="inline h-5 w-6 -rotate-90" />
          </p>
        </li>
        <li className="cutout shadow-hard bg-paper-2">
          <div className="flex items-baseline gap-4 px-5 py-7">
            <span className={labelClass}>Messenger</span>
            <a
              href={`https://m.me/${site.messenger}`}
              target="_blank"
              rel="noopener noreferrer"
              className={ledgerLink}
            >
              Message on Messenger
            </a>
            <span aria-hidden className="leader" />
            <span className={endpointClass}>m.me</span>
          </div>
        </li>
        <li className="cutout shadow-hard bg-paper-2">
          <div className="flex items-baseline gap-4 px-5 py-7">
            <span className={labelClass}>Email</span>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`}
              className={ledgerLink}
            >
              Send an email
            </a>
            <span aria-hidden className="leader" />
            <span className={endpointClass}>mailto</span>
          </div>
        </li>
      </ul>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div className="cutout bg-paper p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
            Have this ready for a quote
          </h3>
          <ul className="mt-4 space-y-2.5 font-body leading-relaxed text-ink-muted">
            {QUOTE_PREP.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span aria-hidden className="font-mono text-accent">
                  ›
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="cutout bg-paper p-6">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink">
            What happens next
          </h3>
          <ol className="mt-4 space-y-2.5 font-body leading-relaxed text-ink-muted">
            {NEXT_STEPS.map((step) => (
              <li key={step} className="flex gap-2.5">
                <span aria-hidden className="font-mono text-accent">
                  ›
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <p
        className={`mt-10 font-mono text-xs uppercase tracking-[0.12em] text-ink-muted ${focusRing}`}
      >
        Typical reply time: within 1 business day, 9am–6pm PHT.
      </p>
    </Section>
  );
}
