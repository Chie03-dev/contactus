/** Shared section index used by the desktop rail and the mobile bar. */

export const INDEX_ITEMS = [
  { num: "I", label: "Pricing", href: "#pricing" },
  { num: "II", label: "Process", href: "#process" },
  { num: "III", label: "FAQ", href: "#faq" },
  { num: "IV", label: "Contact", href: "#contact" },
] as const;

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Underlined mono link used for quotes and secondary actions. */
export const underlineLink = `font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors duration-200 ease-standard hover:text-accent-deep hover:decoration-accent ${focusRing}`;

/** Larger serif link used for the enquiry ledger rows. */
export const ledgerLink = `font-display text-2xl text-ink underline decoration-rule-strong decoration-1 underline-offset-8 transition-colors duration-200 ease-standard hover:text-accent-deep hover:decoration-accent md:text-3xl ${focusRing}`;
