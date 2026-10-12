import { faqs, faqIntro } from "@/content/faq";

import { Section } from "@/components/ui/section";

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow={faqIntro.eyebrow}
      title={faqIntro.title}
      lede={faqIntro.lede}
    >
      <div className="mt-12 border-t border-line">
        {faqs.map((item) => (
          <details key={item.id} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
              <h3 className="text-base font-medium text-ink">
                {item.question}
              </h3>
              <span
                aria-hidden
                className="font-mono text-xl leading-none text-accent transition-transform duration-150 ease-standard group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-5 text-sm leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
