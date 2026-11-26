import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Lost Sock Status Update — one status update, in the voice of a
// lost sock, at most 120 characters (gate: /output/entry.txt, 1-120 chars).
// Winner of a 5-variant blind pairwise (4-0): three beats, a concrete
// noun/number in every beat, punch in the last few words.
//   Beat 1: "Day 4 behind the dryer" — scene + number.
//   Beat 2: "filed a missing-pair report, bribed Lint with 3 crumbs" —
//     the compliance chain, enacted, with a number.
//   Beat 3: "my partner got promoted to dust rag" — the inversion.
// Banned premises avoided: the dryer ate it / eloped with its pair /
// generic sock-drawer mystery. No prior submitted sock line to repeat.
const LINE =
  "Day 4 behind the dryer: filed a missing-pair report, bribed Lint with 3 crumbs, and my partner got promoted to dust rag.";

// Self-check the gate before writing: 1-120 chars, non-blank, no
// trailing newline (the written file must be exactly this text).
if (LINE.length < 1 || LINE.length > 120 || LINE.trim() !== LINE) {
  throw new Error(`entry is ${LINE.length} chars; gate requires 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
