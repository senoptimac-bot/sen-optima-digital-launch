#!/usr/bin/env node
/**
 * Audit interne du design system — scanne src/pages et src/components
 * à la recherche de valeurs Tailwind hors des tokens/échelles retenus
 * (voir le plan d'harmonisation du design system).
 *
 * Ce n'est pas un gate CI strict : c'est un instrument de mesure
 * avant/après pour suivre la réduction des incohérences au fil des
 * vagues de migration.
 *
 * Usage: node scripts/design-audit.mjs
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN_DIRS = ["src/pages", "src/components"];
const UI_PRIMITIVES_DIR = join("src", "components", "ui");

const NAMED_TEXT_TOKENS = new Set([
  "hero",
  "section-title",
  "card-title",
  "body-lg",
  "body",
  "small",
  "caption",
  "display",
  "headline",
  "title",
]);

// Échelle canonique (pas Tailwind par défaut) — 8/16/24/32/48/64/96/128px
const CANONICAL_SPACING_STEPS = new Set([2, 4, 6, 8, 12, 16, 24, 32]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
    } else if (entry.endsWith(".tsx") || entry.endsWith(".ts")) {
      files.push(full);
    }
  }
  return files;
}

function isUiPrimitive(filePath) {
  return filePath.includes(UI_PRIMITIVES_DIR);
}

function extractClassNameStrings(source) {
  const results = [];
  const re = /className\s*=\s*(?:"([^"]*)"|\{`([^`]*)`\}|\{"([^"]*)"\})/g;
  let m;
  while ((m = re.exec(source))) {
    results.push(m[1] ?? m[2] ?? m[3] ?? "");
  }
  return results;
}

const rawTextSizeRe = /\btext-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)\b/g;
const namedTextTokenRe = /\btext-(hero|section-title|card-title|body-lg|body|small|caption|display|headline|title)\b/g;
const sectionSpacingRe = /\b(?:py|pt|pb)-(\d+)\b/g;
const roundedRe = /\brounded-([a-z0-9]+|\[[^\]]+\])\b/g;
const suspiciousButtonOverrideRe = /<Button\b[^>]*className\s*=\s*"[^"]*(?:bg-foreground|bg-accent|h-1[0-9]\b)[^"]*"/g;

const stats = {
  rawTextSize: new Map(),
  namedTextToken: new Map(),
  nonCanonicalSpacing: new Map(),
  rounded: new Map(),
  suspiciousButtons: [],
  filesScanned: 0,
};

for (const dir of SCAN_DIRS) {
  const absDir = join(ROOT, dir);
  for (const file of walk(absDir)) {
    const rel = relative(ROOT, file);
    const source = readFileSync(file, "utf8");
    stats.filesScanned += 1;

    if (!isUiPrimitive(file)) {
      for (const m of source.matchAll(rawTextSizeRe)) {
        const key = `text-${m[1]}`;
        stats.rawTextSize.set(key, (stats.rawTextSize.get(key) ?? 0) + 1);
      }
      for (const m of source.matchAll(namedTextTokenRe)) {
        const key = `text-${m[1]}`;
        stats.namedTextToken.set(key, (stats.namedTextToken.get(key) ?? 0) + 1);
      }

      for (const m of source.matchAll(sectionSpacingRe)) {
        const n = Number(m[1]);
        if (!CANONICAL_SPACING_STEPS.has(n)) {
          const key = m[0];
          const entry = stats.nonCanonicalSpacing.get(key) ?? { count: 0, files: new Set() };
          entry.count += 1;
          entry.files.add(rel);
          stats.nonCanonicalSpacing.set(key, entry);
        }
      }

      for (const m of source.matchAll(roundedRe)) {
        const key = `rounded-${m[1]}`;
        stats.rounded.set(key, (stats.rounded.get(key) ?? 0) + 1);
      }
    }

    for (const m of source.matchAll(suspiciousButtonOverrideRe)) {
      stats.suspiciousButtons.push({ file: rel, snippet: m[0].slice(0, 120) });
    }
  }
}

function printTop(map, label, limit = 12) {
  const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  console.log(`\n${label} (${sorted.length} valeurs distinctes)`);
  for (const [key, count] of sorted.slice(0, limit)) {
    console.log(`  ${String(count).padStart(4)}  ${key}`);
  }
  if (sorted.length > limit) console.log(`  ... +${sorted.length - limit} autres`);
}

console.log("=== Audit Design System — Sen'Optima Consulting ===");
console.log(`Fichiers scannés : ${stats.filesScanned}`);

printTop(stats.rawTextSize, "Tailles de texte BRUTES (hors tokens nommés)");
printTop(stats.namedTextToken, "Tailles de texte via TOKENS NOMMÉS (text-hero/section-title/card-title/body-lg/body/small/caption)");

const totalRaw = [...stats.rawTextSize.values()].reduce((a, b) => a + b, 0);
const totalNamed = [...stats.namedTextToken.values()].reduce((a, b) => a + b, 0);
const total = totalRaw + totalNamed;
if (total > 0) {
  console.log(`\n  => ${Math.round((totalNamed / total) * 100)}% des usages de taille de texte passent par un token nommé (${totalNamed}/${total}).`);
}

console.log(`\nSpacing de section HORS échelle canonique {${[...CANONICAL_SPACING_STEPS].join(",")}} (${stats.nonCanonicalSpacing.size} valeurs)`);
for (const [key, entry] of [...stats.nonCanonicalSpacing.entries()].sort((a, b) => b[1].count - a[1].count).slice(0, 12)) {
  console.log(`  ${String(entry.count).padStart(4)}  ${key}  (ex: ${[...entry.files][0]})`);
}

printTop(stats.rounded, "Border-radius (toutes valeurs, hors src/components/ui/)");

console.log(`\nBoutons <Button> avec override couleur/hauteur suspect (${stats.suspiciousButtons.length})`);
for (const { file, snippet } of stats.suspiciousButtons.slice(0, 10)) {
  console.log(`  ${file}: ${snippet}...`);
}
if (stats.suspiciousButtons.length === 0) {
  console.log("  Aucun — tous les CTA pleins passent par variant=\"hero\".");
}

console.log("\n=== Fin de l'audit ===");
