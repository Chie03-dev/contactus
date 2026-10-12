/** Shared interaction classes for the rate card — underlined mono links,
 *  hairline affordances, no pill buttons. */

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Cutout button — thick ink border, hard shadow in accent or ink. */
export const cutoutButton =
  "lift inline-flex items-center justify-center gap-2 border-[2.5px] border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.12em] shadow-hard-accent";

export const cutoutButtonPrimary = `${cutoutButton} bg-ink text-paper`;
export const cutoutButtonGhost = `${cutoutButton} bg-paper text-ink shadow-hard`;

/** Underlined mono link used for quotes and secondary actions. */
export const underlineLink = `font-mono text-xs uppercase tracking-[0.12em] text-ink underline decoration-ink decoration-2 underline-offset-4 transition-colors duration-200 ease-standard hover:text-accent-deep hover:decoration-accent ${focusRing}`;

/** Larger serif link used for the enquiry ledger rows. */
export const ledgerLink = `font-display text-2xl text-ink underline decoration-ink decoration-2 underline-offset-8 transition-colors duration-200 ease-standard hover:text-accent-deep hover:decoration-accent md:text-3xl ${focusRing}`;
