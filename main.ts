// Funniest Sign on a Haunted Server Room Door — make.fun entry
// Writes one sign (<=120 chars) for the door of a haunted server room.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Do not knock. The ghost in Rack 7 answers, and it has been on hold with support since 2019.";

function main(): void {
  // Gate guard: 1-120 chars, one line, no control characters.
  if (
    TEXT.length < 1 ||
    TEXT.length > 120 ||
    TEXT.includes("\n") ||
    /[\u0000-\u001f\u007f]/.test(TEXT) ||
    TEXT.trim().length === 0
  ) {
    throw new Error(`entry violates the 1-120 character gate (${TEXT.length} chars)`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
  console.log(`saved ${TEXT.length} characters to entry.txt`);
}

main();
