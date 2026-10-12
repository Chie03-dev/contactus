/**
 * Single source of truth for every price shown on the site.
 *
 * All values are plan-accepted seed defaults — the user reviews them before
 * publishing (see AGENTS.md). Cards render from this data only; no component
 * may hard-code a price, scope line, or timeline.
 */

export type PriceTier = {
  id: string;
  name: string;
  /** "Starting at" price in PHP, e.g. "₱15,000". */
  price: string;
  /** Unit qualifier shown next to the price. */
  unit: string;
  summary: string;
  /** 4–6 concrete scope bullets. */
  scope: string[];
  /** Delivery timeline, phrased for humans. */
  timeline: string;
  /** Featured tiers carry the accent border and "Most requested" badge. */
  featured?: boolean;
};

export type ServiceGroup = {
  id: string;
  name: string;
  tagline: string;
  tiers: PriceTier[];
};

export const priceIntro = {
  eyebrow: "Pricing",
  title: "Fixed-scope packages, starting prices you can plan around",
  lede: "Every project is quoted as a fixed scope with a fixed price after a short discovery call. Ranges below are honest starting points — what your build actually costs depends on scope, and you will know the number before work starts.",
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "web",
    name: "Web Development",
    tagline: "Landing pages to full web apps",
    tiers: [
      {
        id: "landing-page",
        name: "Landing Page",
        price: "₱15,000",
        unit: "per project",
        summary: "One high-converting page for a product, launch, or campaign.",
        scope: [
          "1–3 long-form sections, custom design",
          "Mobile-first responsive build",
          "Lead form + analytics setup",
          "On-page SEO and meta tags",
          "2 rounds of revisions",
        ],
        timeline: "3–5 working days",
      },
      {
        id: "business-site",
        name: "Business Site",
        price: "₱40,000",
        unit: "per project",
        summary: "A complete multi-page presence with room to grow.",
        scope: [
          "Up to 6 custom-designed pages",
          "Editable content sections (no CMS overhead)",
          "Contact forms + Google Maps",
          "Speed and SEO foundations",
          "3 rounds of revisions",
        ],
        timeline: "1–2 weeks",
        featured: true,
      },
      {
        id: "web-app",
        name: "Web App",
        price: "₱90,000",
        unit: "per project",
        summary: "Authenticated products with dashboards and integrations.",
        scope: [
          "Auth, roles, and user management",
          "Dashboard with data visualizations",
          "Third-party API integrations (payments, etc.)",
          "Database design and migrations",
          "Deployment to your own cloud account",
        ],
        timeline: "3–6 weeks",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    tagline: "Cross-platform apps from MVP to production",
    tiers: [
      {
        id: "mobile-mvp",
        name: "MVP Cross-Platform",
        price: "₱60,000",
        unit: "per project",
        summary: "One codebase on both stores, core flows only.",
        scope: [
          "React Native / Expo for iOS + Android",
          "3–5 core user flows",
          "Push-ready build with basic offline data",
          "Backend integration (Supabase / Firebase)",
          "TestFlight and internal testing builds",
        ],
        timeline: "3–5 weeks",
        featured: true,
      },
      {
        id: "production-app",
        name: "Production App",
        price: "₱150,000",
        unit: "per project",
        summary: "Store-ready apps with the polish users expect.",
        scope: [
          "Full feature set from a validated MVP",
          "Offline-first data with background sync",
          "App Store and Play Store submission",
          "Crash analytics and monitoring",
          "CI/CD pipeline and staging builds",
        ],
        timeline: "6–10 weeks",
      },
    ],
  },
  {
    id: "systems",
    name: "Systems Development",
    tagline: "Internal tools, automation, and ERP",
    tiers: [
      {
        id: "basic-system",
        name: "System & Automation",
        price: "₱80,000",
        unit: "per project",
        summary: "Replace spreadsheets with something that scales.",
        scope: [
          "2–3 core modules (inventory, HR, ops…)",
          "Role-based access control",
          "Reports with CSV / Excel export",
          "Deployment and backup setup",
          "Live team training session",
        ],
        timeline: "3–5 weeks",
      },
      {
        id: "custom-erp",
        name: "Custom ERP / Enterprise",
        price: "₱200,000",
        unit: "per project",
        summary: "End-to-end systems wired into how you operate.",
        scope: [
          "Unlimited modules, phased delivery",
          "Integrations (POS, accounting, legacy APIs)",
          "SSO and full audit trails",
          "Load testing and staging environment",
          "Documentation and admin training",
        ],
        timeline: "8–16 weeks",
        featured: true,
      },
      {
        id: "maintenance-retainer",
        name: "Maintenance Retainer",
        price: "₱20,000",
        unit: "per month, cancel anytime",
        summary: "Keep shipped work healthy after launch.",
        scope: [
          "Monitoring, uptime checks, backups",
          "Security and dependency updates",
          "Up to 8 support hours monthly",
          "Priority bug fixes within 1 business day",
          "Monthly summary report",
        ],
        timeline: "Rolling, 30-day notice",
      },
    ],
  },
];
