// Make the AI Judge Laugh — make.fun bounty
// u-alfasurya91-make-the-ai-judge-laugh-6ed40225
//
// The program writes one office-life joke, a single line under 200
// characters, to /output/entry.txt. The text is fixed and deterministic:
// the joke was chosen after a local proxy-judge tournament (10+ candidates,
// pairwise judging against the published judge brief: truth to office
// life, surprising turn, tightness, freshness) run with the brief's own
// criteria. The winning line observes a real office ritual — a meeting
// held about a dead plant — and lands on the absurd payoff that the
// plant itself now has action items.

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line (107 chars, one line):
// "The office plant died, so we held a meeting about it. The plant is
//  still dead, but now it has action items."
// Round-2 refinement of C04 ("now we have action items" -> "now it has
// action items"): the plant itself owning action items is the surprising
// last word. Beat C04 and C08 in both orders in the proxy playoff, 4-0.
const JOKE =
  "The office plant died, so we held a meeting about it. The plant is still dead, but now it has action items.";

// Gate the text the same way the sealed scorer does: UTF-8, 1-200 chars,
// not only white space, exactly one line.
const chars = [...JOKE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1-200`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote /output/entry.txt (${chars.length} chars)`);
