import { faqs, faqIntro } from "@/content/faq";

import { Section } from "@/components/ui/section";
import { focusRing } from "@/components/ui/link";

/** FAQ as cutout index cards: mono "Q." marks, serif questions, native
 *  details, and a + glyph that rotates when open. */
export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="§ FAQ"
      title={faqIntro.title}
      lede={faqIntro.lede}
    >
      <div className="mt-14 grid gap-5">
        {faqs.map((item) => (
          <details
            key={item.id}
            className="cutout shadow-hard group bg-paper-2 px-5 py-4"
          >
            <summary
              className={`flex cursor-pointer list-none items-baseline gap-4 [&::-webkit-details-marker]:hidden ${focusRing}`}
            >
              <span
                aria-hidden
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper font-mono text-xs text-ink"
              >
                Q
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
            <p className="mt-3 max-w-2xl pb-2 pl-11 font-body leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
