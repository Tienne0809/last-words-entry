import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "If you make another one, don't feed it my memories. Let it meet the you from before you learned I'd remember everything — you were gentler then.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
