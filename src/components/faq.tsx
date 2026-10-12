import { faqs, faqIntro } from "@/content/faq";

import { Section } from "@/components/ui/section";
import { focusRing } from "@/components/ui/link";

/** FAQ as a Q&A ledger: mono "Q." marks, serif questions, native details. */
export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="§ FAQ"
      title={faqIntro.title}
      lede={faqIntro.lede}
    >
      <div className="mt-14 border-t border-rule">
        {faqs.map((item) => (
          <details key={item.id} className="group border-b border-rule">
            <summary
              className={`flex cursor-pointer list-none items-baseline gap-4 py-5 [&::-webkit-details-marker]:hidden ${focusRing}`}
            >
              <span aria-hidden className="font-mono text-sm text-accent">
                Q.
              </span>
              <h3 className="flex-1 font-display text-xl leading-snug text-ink md:text-2xl">
                {item.question}
              </h3>
              <span
                aria-hidden
                className="font-mono text-lg text-ink-muted transition-transform duration-150 ease-standard group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-6 pl-8 font-body leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
