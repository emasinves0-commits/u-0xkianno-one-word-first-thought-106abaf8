// One Word, First Thought — writes the single word "firefly" to entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const WORD = "firefly"; // first thought: a small warm light in the dark
const ENTRY_FILE = "entry.txt"; // exactly one word, no trailing newline
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY_FILE), WORD);
