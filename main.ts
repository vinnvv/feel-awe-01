import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The rain that fills the river fell before the first road was laid, and the light on the sill left the sun eight minutes ago, and nothing in this room is asking anything of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
