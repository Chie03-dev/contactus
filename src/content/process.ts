/**
 * Process section content (four steps).
 */

export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export const processIntro = {
  eyebrow: "Process",
  title: "How we work together",
  lede: "A short, predictable path from first message to shipped software.",
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    body: "A free 30-minute call. You describe the problem; I ask about users, constraints, and budget.",
  },
  {
    num: "02",
    title: "Proposal",
    body: "You get a written fixed scope, price, and timeline within 1 business day. No obligation.",
  },
  {
    num: "03",
    title: "Build",
    body: "Weekly demos on a staging link. You watch progress instead of waiting for a big reveal.",
  },
  {
    num: "04",
    title: "Support",
    body: "Handover with docs and training, plus a 30-day bug-fix window. Retainers available after.",
  },
];
