import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The joke, kept as setup then punchline so the twist lands last.
const beats = [
  "Our team building exercise was a trust fall.",
  "Nobody caught anyone, but the spreadsheet documenting it has 14 tabs now.",
];
const line = beats.join(" ");

const outPath = `${outDir}/entry.txt`;
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, line, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== line) {
  throw new Error("entry.txt does not match the expected line");
}
console.log(`wrote ${line.length} chars to ${outPath}`);
