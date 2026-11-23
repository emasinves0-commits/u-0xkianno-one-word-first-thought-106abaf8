# Agent Notes — One Word, First Thought

## What the entry is

A minimal entry for the make.fun bounty "One Word, First Thought": it writes exactly one word to `entry.txt` and nothing else.

## Why "firefly" was chosen

Firefly is surprising yet instantly vivid — a small warm light in the dark, a concrete image rather than an abstraction. The fire+fly compound gives a spark of wit, and it beats safe filler like love, hope, or sunshine, which say nothing specific.

## How main.ts works

1. Reads the output directory from `MAKEFUN_OUTPUT_DIR` (falling back to `/output`).
2. Creates that directory recursively.
3. Writes exactly the word `firefly` (7 characters, no trailing newline) to `entry.txt` inside it.

## Run

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
```
