/**
 * generate-og.mjs
 * Convierte og-image.svg → og-image.png (1200×630) usando @resvg/resvg-js.
 * Ejecutar: bun run generate-og
 */
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const svgContent = readFileSync(join(root, "og-image.svg"), "utf-8");

const resvg = new Resvg(svgContent, {
  fitTo: { mode: "original" },
  background: "#0f172a",
});

const width = resvg.width;
const height = resvg.height;

const rendered = resvg.render();
const png = rendered.asPng();

writeFileSync(join(root, "og-image.png"), png);

console.log(`✓ og-image.png generada (${width}×${height})`);
