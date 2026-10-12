/**
 * FAQ content. Rendered as native <details> elements — no client JS needed.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions, answered plainly",
  lede: "The terms clients ask about most, stated up front so there are no surprises later.",
};

export const faqs: FaqItem[] = [
  {
    id: "payment",
    question: "What are your payment terms?",
    answer:
      "Projects under ₱100,000 are billed 50% up front and 50% on delivery. Larger builds are billed by milestone, so you only pay for finished, reviewed phases.",
  },
  {
    id: "revisions",
    question: "How many revisions are included?",
    answer:
      "Every package includes 2–3 rounds of revisions, defined in the proposal before work starts. Small tweaks inside the agreed scope are free; new features are quoted as fixed add-ons.",
  },
  {
    id: "hosting",
    question: "Who pays for hosting and domains?",
    answer:
      "You do — hosting, domains, and third-party services are billed to your own accounts so you keep full ownership. We set everything up during deployment and recommend options that fit your budget.",
  },
  {
    id: "ip",
    question: "Who owns the code and designs?",
    answer:
      "You do. Full ownership of code, design files, and documentation transfers to you on final payment, along with the repositories and deploy access.",
  },
  {
    id: "timeline",
    question: "How accurate are the delivery timelines?",
    answer:
      "Timelines assume feedback within one business day. Delayed content, feedback, or decisions shift dates — that is stated in the proposal so the trade-off is explicit.",
  },
  {
    id: "changes",
    question: "What happens if scope changes mid-project?",
    answer:
      "Change requests are quoted as fixed add-ons before any work starts. Nothing extra is ever billed without your written approval — no surprise invoices.",
  },
];
