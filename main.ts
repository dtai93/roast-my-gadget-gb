// One-line roast of a daily gadget. Writes entry.txt for the make.fun judge.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The trackpad hits Send with your palm while you are still typing don't.";

const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
  throw new Error(`entry length invalid: ${chars}`);
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, { encoding: "utf8" });
