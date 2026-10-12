/**
 * Central site and contact configuration. Referenced by layout metadata, the
 * contact section, and the footer — never duplicate these literals elsewhere.
 *
 * TODO:REPLACE — every contact value below is a placeholder that must be
 * swapped for real details before publishing (see AGENTS.md, Known TODOs):
 *   - email:     inbox that should receive inquiries
 *   - whatsapp:  number in international format, digits only (63…)
 *   - messenger: facebook.com username for m.me links
 */
export const site = {
  name: "Alchie Andilab",
  role: "Web, Mobile & Systems Developer",
  url: "https://chie03-dev.github.io/contactus",
  github: "https://github.com/Chie03-dev",
  email: "TODO:REPLACE@example.com",
  whatsapp: "63TODO:REPLACE",
  messenger: "TODO:REPLACE",
  disclaimer:
    "Prices are starting estimates; final scope and quote are confirmed after discovery.",
} as const;
