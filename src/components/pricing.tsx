import { priceIntro, serviceGroups } from "@/content/pricing";
import { site } from "@/lib/site";

import { Section } from "@/components/ui/section";
import { TierRow } from "@/components/tier-row";
import { DoodleArrow } from "@/components/ui/doodles";

const GROUP_NUMERALS = ["I", "II", "III"];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="§ Pricing"
      title={priceIntro.title}
      lede={priceIntro.lede}
    >
      <p className="mt-6 flex items-center gap-2 font-hand text-xl text-accent-deep">
        pick one - or just ask, we&apos;ll help you choose
        <DoodleArrow className="h-8 w-10 -rotate-12 text-accent" />
      </p>

      <div className="mt-12 space-y-16">
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.id} data-group={group.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-[3px] border-ink pb-3">
              <div className="flex items-baseline gap-4">
                <span
                  aria-hidden
                  className="font-mono text-sm text-accent"
                >
                  {GROUP_NUMERALS[groupIndex]}
                </span>
                <h3 className="font-display text-3xl leading-none text-ink md:text-4xl">
                  {group.name}
                </h3>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
                {group.tagline}
              </p>
            </div>
            <div className="mt-6">
              {group.tiers.map((tier) => (
                <TierRow key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6">
        <p className="max-w-xl font-mono text-xs leading-relaxed text-ink-muted">
          * All prices are starting points, in Philippine pesos.{" "}
          {site.disclaimer}
        </p>
        <p className="stamp -rotate-2 bg-paper px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Starting estimates
        </p>
      </div>
    </Section>
  );
}
