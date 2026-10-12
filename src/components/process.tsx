import { processIntro, processSteps } from "@/content/process";

import { Section } from "@/components/ui/section";
import { DoodleStar } from "@/components/ui/doodles";

/** Process as comic panels: numbered cutouts with a hand-written aside. */
export function Process() {
  return (
    <Section
      id="process"
      eyebrow="§ Process"
      title={processIntro.title}
      lede={processIntro.lede}
    >
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={step.num}
            className="cutout shadow-hard relative bg-paper-2 p-6"
          >
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-full border-[2.5px] border-ink bg-paper font-mono text-sm font-medium text-ink"
            >
              {step.num}
            </span>
            {index === 0 ? (
              <DoodleStar className="absolute right-5 top-5 h-5 w-5 text-accent" />
            ) : null}
            <h3 className="mt-4 font-display text-2xl leading-tight text-ink md:text-3xl">
              {step.title}
            </h3>
            <p className="mt-2 font-body leading-relaxed text-ink-muted">
              {step.body}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 font-hand text-xl text-accent-deep">
        the first call is free — no pitch deck, we swear
      </p>
    </Section>
  );
}
