import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The rain that fills the river fell before the first road was laid, and the light on the sill left the sun eight minutes ago, and nothing in this room is asking anything of you.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 280;

const length = [...TEXT].length;
if (length < MIN_LENGTH || length > MAX_LENGTH) {
  throw new Error(
    `Entry text must be ${MIN_LENGTH} to ${MAX_LENGTH} characters, got ${length}.`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
