---
description: End-of-session save — autonomously extracts learnings from artifacts, updates component specs, and prunes stale data in one shot. Run after ANY session.
---

# Save Session (`/1_update-active-context`)

Run this before closing any session to autonomously extract and save task state and learnings without mid-workflow pauses.

## Step 1: Read Current State
// turbo
Read these files:
1. `_bmad-output/active-context/active-context.md` — current tasks and pitfalls.
2. `_bmad-output/project-context.md` — architecture rules.
3. List `_bmad-output/component-specs/` — available specs.

Display: how many active tasks, sprint objective, known pitfalls.

## Step 2: Autonomous Learning Extraction
// turbo
Actively read the session artifacts to extract implicit learnings:
1. Read `task.md` (to see what tasks were completed or added).
2. Read `walkthrough.md` (to see what was discovered, built, or fixed).
3. Review any recently modified code diffs (if applicable) to identify new gotchas, invariants, or failure modes.

*Do not pause.*

## Step 3: Auto-Categorize Learnings
// turbo
Categorize the extracted learnings automatically:
| Type of Learning | Where It Goes |
|---|---|
| New bug discovered | `active-context.md` → new task block |
| New architectural rule | `project-context.md` → "Critical Architecture Rules" |
| New pitfall / gotcha | `component-specs/[spec].md` → "Known Pitfalls" |
| New failure mode | `component-specs/[spec].md` → "Common Failure Modes" |
| New invariant | `component-specs/[spec].md` → "Invariants" |
| Decision change | `component-specs/[spec].md` → update relevant section |
| Sprint status change | `active-context.md` → update objective |

*Do not pause.*

## Step 4: Apply All Updates
// turbo
Automatically write the categorized learnings and task updates to their respective files:
- **Completed tasks**: Move to `## Completed Tasks` with `- **Resolved:** YYYY-MM-DD` in `active-context.md`.
- **New tasks**: Append labeled block under `## Active Tasks` in `active-context.md`.
- **Learnings**: Append to specs using format: `- **YYYY-MM-DD**: [Description]. (Extracted from session artifacts)`
- **Last Updated**: Set to today's date in modified files.

*Do not pause.*

## Step 5: Housekeeping
// turbo
Prune stale data from `active-context.md`:
- Completed tasks over 5 → delete oldest
- Pitfalls already in a component spec → remove from here
- Active tasks older than 7 days → prepare to flag to user at the end
- Duplicate entries → remove

**Size caps:** If any component spec exceeds 120 lines, prune oldest pitfalls/failure modes (keep 8 most recent). If `project-context.md` exceeds 80 lines, prepare to flag for review.

## Step 6: Final Summary & Receipt
// turbo
Blast all the way through to the end, then show an itemized receipt of exactly what was moved, written, and pruned based on the artifacts.

Offer one single final prompt:
> "Session state saved and learnings extracted autonomously. 
> - Tasks moved/added: [List]
> - Learnings written: [List files and additions]
> - Pruned data: [List]
> 
> Did I miss anything, or are we clear to close the session?"
