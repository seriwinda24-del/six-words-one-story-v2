import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

// One complete story in exactly six words.
// Gate: /output/entry.txt must be 1–60 chars, UTF-8, not only
// whitespace — so the story is written exactly, no trailing newline.
const STORY = "Astronaut landed safely. Earth was gone.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
