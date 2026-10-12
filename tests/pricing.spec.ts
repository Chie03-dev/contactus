import { expect, test } from "@playwright/test";

import { faqs } from "../src/content/faq";
import { serviceGroups } from "../src/content/pricing";
import { site } from "../src/lib/site";

const BASE = "/contactus/";
const ALL_TIERS = serviceGroups.flatMap((group) => group.tiers);

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test.beforeEach(async ({ page }) => {
  await page.goto(BASE);
});

test("hero states the offer with primary CTAs", async ({ page }) => {
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Transparent pricing for Philippine web, mobile & systems development",
  );
  await expect(
    page.getByRole("link", { name: "View pricing" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Get a quote" }).first(),
  ).toBeVisible();
});

test("every tier card renders its ₱ starting price, scope, and timeline", async ({
  page,
}) => {
  for (const group of serviceGroups) {
    const groupEl = page.locator(`[data-group="${group.id}"]`);
    await expect(
      groupEl.getByRole("heading", { name: group.name }),
    ).toBeVisible();

    for (const tier of group.tiers) {
      const card = page.locator(`[data-tier="${tier.id}"]`);
      await expect(card).toBeVisible();
      await expect(
        card.getByRole("heading", { name: tier.name }),
      ).toBeVisible();
      await expect(card).toContainText("Starting at");
      await expect(card).toContainText(tier.price);
      expect(tier.price.startsWith("₱")).toBe(true);
      await expect(card).toContainText(tier.timeline);
      await expect(card.locator("li")).toHaveCount(tier.scope.length);
      await expect(
        card.getByRole("link", { name: "Get a quote" }),
      ).toBeVisible();
    }
  }
  await expect(page.locator("article[data-tier]")).toHaveCount(
    ALL_TIERS.length,
  );
});

test("nav anchors scroll to their sections", async ({ page }) => {
  const nav = page.getByRole("navigation", { name: "Sections" }).first();
  const targets = [
    ["Pricing", "pricing"],
    ["Process", "process"],
    ["FAQ", "faq"],
    ["Contact", "contact"],
  ] as const;

  for (const [label, id] of targets) {
    await nav.getByRole("link", { name: label }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect(page.locator(`#${id}`)).toBeInViewport();
  }
});

test("contact section exposes direct channels with correct hrefs", async ({
  page,
}) => {
  const contact = page.locator("#contact");
  await expect(
    contact.getByRole("link", { name: "WhatsApp" }),
  ).toHaveAttribute(
    "href",
    new RegExp(`^https://wa\\.me/${escapeRegExp(site.whatsapp)}`),
  );
  await expect(
    contact.getByRole("link", { name: "Messenger" }),
  ).toHaveAttribute("href", `https://m.me/${site.messenger}`);
  await expect(
    contact.getByRole("link", { name: "Email me" }),
  ).toHaveAttribute("href", new RegExp(`^mailto:${escapeRegExp(site.email)}`));

  const links = await contact.getByRole("link").all();
  expect(links.length).toBe(3);
  expect(
    await page.locator("#contact form").count(),
  ).toBe(0);
});

test("all FAQ questions render and expand", async ({ page }) => {
  await expect(page.locator("#faq details")).toHaveCount(faqs.length);
  const first = page.locator("#faq details").first();
  await expect(first).not.toHaveAttribute("open", "");
  await first.locator("summary").click();
  await expect(first).toHaveAttribute("open", "");
  await expect(first).toContainText(faqs[0].answer);
});

test("skip link is the first tab stop", async ({ page }) => {
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
});

test.describe("desktop 1440px", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("renders without horizontal overflow", async ({ page }) => {
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

test.describe("mobile 375px", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("renders without horizontal overflow", async ({ page }) => {
    const overflow = await page.evaluate(
      () =>
        document.documentElement.scrollWidth -
        document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test("mobile anchor strip stays usable", async ({ page }) => {
    const strip = page.locator('header nav[aria-label="Sections"]').last();
    await expect(strip).toBeVisible();
    await expect(strip.getByRole("link", { name: "Contact" })).toBeVisible();
  });
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });

  test("content renders fully with animation disabled", async ({ page }) => {
    const card = page.locator('[data-tier="landing-page"]');
    await expect(card).toBeVisible();
    const styles = await card.evaluate((el) => {
      const computed = getComputedStyle(el);
      return {
        animationDuration: computed.animationDuration,
        opacity: computed.opacity,
      };
    });
    expect(parseFloat(styles.animationDuration)).toBeLessThan(0.001);
    expect(Number(styles.opacity)).toBe(1);
  });
});

test("key text meets AA contrast against its background", async ({ page }) => {
  const results = await page.evaluate(() => {
    const parse = (color: string): [number, number, number] => {
      const match = color.match(/rgba?\(([^)]+)\)/);
      if (!match) throw new Error(`cannot parse color: ${color}`);
      const parts = match[1].split(",").map((part) => parseFloat(part));
      return [parts[0], parts[1], parts[2]];
    };
    const luminance = ([r, g, b]: [number, number, number]) => {
      const channel = (value: number) => {
        const srgb = value / 255;
        return srgb <= 0.03928
          ? srgb / 12.92
          : Math.pow((srgb + 0.055) / 1.055, 2.4);
      };
      return (
        0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
      );
    };
    const contrast = (fg: string, bg: string) => {
      const l1 = luminance(parse(fg));
      const l2 = luminance(parse(bg));
      const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
      return (hi + 0.05) / (lo + 0.05);
    };
    const backgroundOf = (el: Element): string => {
      let node: Element | null = el;
      while (node) {
        const bg = getComputedStyle(node).backgroundColor;
        const match = bg.match(/rgba?\(([^)]+)\)/);
        if (match) {
          const alpha = match[1].split(",")[3];
          if (alpha === undefined || parseFloat(alpha) > 0.95) return bg;
        }
        node = node.parentElement;
      }
      return "rgb(10, 14, 20)";
    };
    const check = (name: string, selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return { name, ratio: 0, selector };
      const color = getComputedStyle(el).color;
      return { name, ratio: contrast(color, backgroundOf(el)), selector };
    };
    return [
      check("hero lede", "#hero-title + p"),
      check("pricing lede", "#pricing header p"),
      check("card summary", '[data-tier="landing-page"] .text-ink-muted'),
      check("tier price", '[data-tier="landing-page"] .text-3xl'),
      check("section eyebrow", "#pricing header .text-accent"),
      check("featured badge", '[data-tier="business-site"] .bg-accent'),
      check("footer disclaimer", "footer .text-xs"),
    ];
  });

  for (const result of results) {
    const threshold =
      result.name === "tier price" ||
      result.name === "footer disclaimer"
        ? 3
        : 4.5;
    expect(
      result.ratio,
      `${result.name} (${result.selector}) contrast`,
    ).toBeGreaterThanOrEqual(threshold);
  }
});
