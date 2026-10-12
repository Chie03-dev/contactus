import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "off",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // Serves the static export (run `npm run build` first) at the same
    // base path GitHub Pages uses.
    command: "node tests/serve.mjs 3100",
    url: "http://127.0.0.1:3100/contactus/",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
  },
});
