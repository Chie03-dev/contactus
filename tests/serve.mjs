// Minimal static file server for the exported site in out/. Mirrors the
// GitHub Pages project-page layout: the site lives under /contactus/, so "/"
// redirects there. No dependencies — `npm run build` first, then
// `node tests/serve.mjs [port]`.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../out/", import.meta.url));
const basePath = "/contactus";
const port = Number(process.argv[2] ?? 3100);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".xml": "application/xml",
};

createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, "http://127.0.0.1");

    if (pathname === "/") {
      res.writeHead(301, { location: `${basePath}/` }).end();
      return;
    }

    if (!pathname.startsWith(`${basePath}/`)) {
      res.writeHead(404, { "content-type": "text/plain" }).end("Not found");
      return;
    }

    let rel = decodeURIComponent(pathname).slice(basePath.length);
    if (rel.endsWith("/")) rel += "index.html";

    const filePath = join(root, normalize(rel));
    if (!filePath.startsWith(root)) {
      res.writeHead(403, { "content-type": "text/plain" }).end("Forbidden");
      return;
    }

    const body = await readFile(filePath);
    res.writeHead(200, {
      "content-type": MIME[extname(filePath)] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch {
    res
      .writeHead(404, { "content-type": "text/plain; charset=utf-8" })
      .end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`serving out/ at http://127.0.0.1:${port}${basePath}/`);
});
