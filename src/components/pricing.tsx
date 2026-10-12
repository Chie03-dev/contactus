import { priceIntro, serviceGroups } from "@/content/pricing";
import { cn } from "@/lib/utils";

import { Section } from "@/components/ui/section";
import { TierCard } from "@/components/tier-card";

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow={priceIntro.eyebrow}
      title={priceIntro.title}
      lede={priceIntro.lede}
    >
      <div className="mt-14 space-y-16">
        {serviceGroups.map((group) => (
          <div key={group.id} data-group={group.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-4">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-ink">
                {group.name}
              </h3>
              <p className="text-sm text-ink-muted">{group.tagline}</p>
            </div>
            <div
              className={cn(
                "mt-6 grid gap-5 sm:grid-cols-2",
                group.tiers.length > 2 && "lg:grid-cols-3",
              )}
            >
              {group.tiers.map((tier, index) => (
                <TierCard
                  key={tier.id}
                  tier={tier}
                  delay={index * 60}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
