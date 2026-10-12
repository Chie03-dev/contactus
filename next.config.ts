import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Emit a fully static site (pure HTML/CSS/JS) for GitHub Pages hosting.
  output: "export",
  // Static export cannot use the Next.js image optimization server, so images
  // are served as-is (unoptimized).
  images: {
    unoptimized: true,
  },
  // Predictable, directory-based URLs for reliable static hosting.
  trailingSlash: true,
  // Project page: the repo is github.com/Chie03-dev/contactus, so the site is
  // served at https://chie03-dev.github.io/contactus/ and every asset/link is
  // prefixed with this basePath. A user page (user.github.io) would omit it.
  basePath: "/contactus",
};

export default nextConfig;
