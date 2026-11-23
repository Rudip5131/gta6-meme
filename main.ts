// gta6-meme-x-01: the whole entry is the X post named in POST.json.
// This program just hands that file to the gate: it copies POST.json
// from the repo into the output directory, where the checker reads it.
// The meme itself lives on X (first picture + text of the post);
// nothing here is judged except that the post exists and carries
// make.fun / @makefunai and the play code.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// In the grader's container the repo is mounted at /bot and the
// result goes to /output. Locally, set MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR to test, e.g.:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
  const post = JSON.parse(readFileSync(join(outDir, "POST.json"), "utf8"));
  if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
    console.error("POST.json does not name an X post:", post);
    process.exit(1);
  }
  console.log("entry post:", post.url);
} catch (err) {
  console.error("could not copy POST.json:", (err as Error).message);
  process.exit(1);
}
