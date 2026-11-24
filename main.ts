import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: the excuse a robot vacuum gives after eating a sock.
// Deadpan defence — removing things from the floor is its whole job.
const PARTS = [
  "The sock was on the floor.",
  "Removing things from the floor is my entire job description.",
];

const ENTRY = PARTS.join(" ");

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(import.meta.dirname, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`ok: entry.txt ${chars} chars`);
