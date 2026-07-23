/**
 * Post-build step: bakes per-route <title>/meta/OG/Twitter tags into static HTML files.
 *
 * Why: this is a pure client-side SPA (no SSR/prerendering). React Helmet Async only
 * updates <head> after JS runs, so crawlers that don't execute JS (WhatsApp, Facebook,
 * LinkedIn preview bots) only ever see index.html's static tags — the same ones,
 * regardless of which page was shared. This script reads the single source of truth
 * (src/config/seo.config.ts) and writes one dist/<path>/index.html per route with the
 * correct tags already baked in. React still renders the real content client-side on
 * top of this shell exactly as before — this only fixes what non-JS bots and the raw
 * HTML response contain.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const seoConfigPath = path.join(root, "src/config/seo.config.ts");
const BASE_URL = "https://senoptimaconsulting.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function parseSeoConfig(source) {
  const entries = [];
  const blockRegex = /(\w+):\s*\{([^}]*)\}/gs;
  let match;
  while ((match = blockRegex.exec(source)) !== null) {
    const [, name, body] = match;
    const get = (key) => {
      const m = body.match(new RegExp(`${key}:\\s*"([^"]*)"`));
      return m ? m[1] : undefined;
    };
    const canonicalPath = get("canonicalPath");
    if (!canonicalPath) continue; // skip malformed/non-page blocks
    entries.push({
      name,
      title: get("title") ?? "",
      description: get("description") ?? "",
      keywords: get("keywords"),
      canonicalPath,
      noIndex: /noIndex:\s*true/.test(body),
    });
  }
  return entries;
}

function fullTitle(title) {
  return title.includes("Sen'Optima") ? title : `${title} | Sen'Optima Consulting`;
}

function replaceTag(html, regex, replacement) {
  if (!regex.test(html)) {
    throw new Error(`Template tag not found for pattern: ${regex}`);
  }
  return html.replace(regex, replacement);
}

function buildHtmlFor(template, entry) {
  const title = fullTitle(entry.title);
  const canonicalUrl = `${BASE_URL}${entry.canonicalPath}`;
  const robots = entry.noIndex ? "noindex, nofollow" : "index, follow";

  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${entry.description}" />`);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);
  html = replaceTag(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${entry.description}" />`);
  html = replaceTag(html, /<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${entry.description}" />`);

  if (entry.keywords) {
    if (/<meta name="keywords" content="[^"]*" \/>/.test(html)) {
      html = html.replace(/<meta name="keywords" content="[^"]*" \/>/, `<meta name="keywords" content="${entry.keywords}" />`);
    } else {
      html = html.replace(/<meta name="author"[^>]*\/>/, (m) => `${m}\n    <meta name="keywords" content="${entry.keywords}" />`);
    }
  }

  return html;
}

function writeForRoute(canonicalPath, html) {
  if (canonicalPath === "/") {
    writeFileSync(path.join(distDir, "index.html"), html);
    return;
  }
  const outDir = path.join(distDir, canonicalPath.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(path.join(outDir, "index.html"), html);
}

function main() {
  if (!existsSync(distDir)) {
    console.error("dist/ not found — run `vite build` before this script.");
    process.exit(1);
  }
  const template = readFileSync(path.join(distDir, "index.html"), "utf-8");
  const seoSource = readFileSync(seoConfigPath, "utf-8");
  const entries = parseSeoConfig(seoSource);

  let count = 0;
  for (const entry of entries) {
    const html = buildHtmlFor(template, entry);
    writeForRoute(entry.canonicalPath, html);
    count++;
  }
  console.log(`generate-static-meta: wrote ${count} static route(s) with page-specific meta tags.`);
}

main();
