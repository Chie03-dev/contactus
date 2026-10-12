import { processIntro, processSteps } from "@/content/process";

import { Section } from "@/components/ui/section";

export function Process() {
  return (
    <Section
      id="process"
      eyebrow={processIntro.eyebrow}
      title={processIntro.title}
      lede={processIntro.lede}
    >
      <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
        {processSteps.map((step, index) => (
          <li
            key={step.num}
            className="animate-reveal border-t border-line pt-5"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p
              className={
                index === 0
                  ? "font-mono text-sm font-semibold text-accent"
                  : "font-mono text-sm font-semibold text-ink-muted"
              }
            >
              {step.num}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
