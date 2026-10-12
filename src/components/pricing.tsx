import { priceIntro, serviceGroups } from "@/content/pricing";
import { site } from "@/lib/site";

import { Section } from "@/components/ui/section";
import { TierRow } from "@/components/tier-row";

const GROUP_NUMERALS = ["I", "II", "III"];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="§ Pricing"
      title={priceIntro.title}
      lede={priceIntro.lede}
    >
      <div className="mt-16 space-y-20">
        {serviceGroups.map((group, groupIndex) => (
          <div key={group.id} data-group={group.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-ink pb-3">
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
            <div className="mt-2 border-t border-rule">
              {group.tiers.map((tier) => (
                <TierRow key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-xl font-mono text-xs leading-relaxed text-ink-muted">
        * All prices are starting points, in Philippine pesos.{" "}
        {site.disclaimer}
      </p>
    </Section>
  );
}
