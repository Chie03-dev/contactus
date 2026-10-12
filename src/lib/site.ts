/**
 * Central site and contact configuration. Referenced by layout metadata, the
 * contact section, and the footer — never duplicate these literals elsewhere.
 *
 * TODO:REPLACE — the remaining placeholders that must be swapped before
 * publishing (see AGENTS.md, Known TODOs):
 *   - email:     inbox that should receive inquiries
 *   - messenger: facebook.com username for m.me links
 */
export const site = {
  name: "Alchie Andilab",
  role: "Web, Mobile & Systems Developer",
  url: "https://chie03-dev.github.io/contactus",
  github: "https://github.com/Chie03-dev",
  email: "TODO:REPLACE@example.com",
  /** Primary channel: call or text. Display formats + international tel: URI. */
  phone: "0956 972 5638",
  phoneIntl: "+63 956 972 5638",
  phoneHref: "+639569725638",
  messenger: "TODO:REPLACE",
  /** The three-person team. {site.name} handles development. */
  team: ["Alchie Andilab", "Luel Cabaltera", "Reece Salon"],
  disclaimer:
    "Prices are starting estimates; final scope and quote are confirmed after discovery.",
} as const;
