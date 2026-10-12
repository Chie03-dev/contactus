/**
 * Central site and contact configuration. Referenced by layout metadata, the
 * contact section, and the footer — never duplicate these literals elsewhere.
 */
export const site = {
  name: "Alchie Andilab",
  role: "Web, Mobile & Systems Developer",
  url: "https://chie03-dev.github.io/contactus",
  github: "https://github.com/Chie03-dev",
  email: "alchieandilab2003@gmail.com",
  /** Primary channel: call or text. Display formats + international tel: URI. */
  phone: "0956 972 5638",
  phoneIntl: "+63 956 972 5638",
  phoneHref: "+639569725638",
  /** Facebook profile URL (Reece) — used directly as the Messenger link. */
  messenger: "https://www.facebook.com/reecephil.licayansalon",
  /** The three-person team and what each person covers. */
  team: [
    { name: "Alchie Andilab", role: "design" },
    { name: "Luel Cabaltera", role: "system" },
    { name: "Reece Salon", role: "shipping" },
  ],
  disclaimer:
    "Prices are starting estimates; final scope and quote are confirmed after discovery.",
} as const;
