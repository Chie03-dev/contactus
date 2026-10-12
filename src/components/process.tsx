import { processIntro, processSteps } from "@/content/process";

import { Section } from "@/components/ui/section";

/** Process as a numbered ledger: hanging numerals, hairline rows. */
export function Process() {
  return (
    <Section
      id="process"
      eyebrow="§ Process"
      title={processIntro.title}
      lede={processIntro.lede}
    >
      <ol className="mt-16 border-t border-rule">
        {processSteps.map((step, index) => (
          <li
            key={step.num}
            className="grid grid-cols-[3rem_1fr] gap-x-6 border-b border-rule py-8 md:grid-cols-[5rem_1fr]"
          >
            <span
              aria-hidden
              className={
                index === 0
                  ? "font-mono text-2xl text-accent"
                  : "font-mono text-2xl text-rule-strong"
              }
            >
              {step.num}
            </span>
            <div>
              <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xl font-body leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
