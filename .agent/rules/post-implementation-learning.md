---
name: post-implementation-learning
description: "Activates after any code implementation is complete — whether via dev-story, quick-dev, or manual fix. Prompts the agent to feed learnings back into component specs and update active context."
activation: Model Decision
---

# Post-Implementation Learning — Feedback Loop Rule

## Purpose
Ensure that every bug fix, feature implementation, or refactor feeds its learnings back into the component spec system. Without this rule, hard-won debugging knowledge dies with the chat session.

## When This Rule Fires
- You just **finished implementing** a story task, tech-spec, or bug fix
- You just **verified that code is working** (tests pass, manual test confirms)
- You are about to **close a session** or **move on to a different task**

## Required Steps

### 1. Update Active Context Task
In `_bmad-output/active-context/active-context.md`:
- Find your task block under `## Active Tasks`
- Move it to `## Completed Tasks`
- Add `- **Resolved:** YYYY-MM-DD`
- Add `- **Pitfall Discovered:**` if applicable

**Housekeeping (every time):**
- If `## Completed Tasks` has more than 5 entries, delete the oldest ones (their pitfalls already live in component specs)
- If any `## Known Pitfalls` entry is already recorded in a component spec, remove the duplicate from here
- If any active task has a `Started` date older than 7 days, flag it to the user


### 2. Ask About Spec Updates
Ask the user:

> "During this fix, did you discover anything that should be added to a component spec? For example:
> - A new Known Pitfall (a non-obvious gotcha)?
> - A new Common Failure Mode (symptom → root cause)?
> - An invariant that needs updating?
> - A file that should be added to the Key Files table?
>
> If yes, I'll append it to the relevant spec. If no, we're done."

### 3. Append to Component Spec (if yes)
If learnings were identified, append them to the relevant component spec file in `_bmad-output/component-specs/`:

**For Known Pitfalls — append a dated entry:**
```markdown
- **YYYY-MM-DD**: [Description of what happened and why]. (Source: [story/bug ID])
```

**For Common Failure Modes — append a new row:**
```markdown
| [Symptom] | [Root Cause] | [Where to Look] |
```

**For Invariant changes — flag to user first:**
Invariants are architectural contracts. Don't add or modify them without explicit approval. Present the proposed invariant and ask: "Should this be added as a new invariant?"

**⚠️ Size Cap (120 lines per spec):**
After appending, check the spec's line count. If it exceeds 120 lines:
- Delete the oldest Known Pitfalls entries (keep the 8 most recent)
- Delete the oldest Common Failure Mode rows (keep the 8 most recent)
- The learnings are already in Knowledge Items / chat history — the spec is short-term reference, not permanent archive

### 4. Check for New Components Without Specs
If this implementation introduced a **new agent, new service, new UI section, or new data pipeline** that doesn't have a component spec yet, ask:

> "This work introduced [component name]. No component spec exists for it yet. Want me to create one? It would document the data flow, key files, invariants, and failure modes so future sessions know the rules."

If yes — create the spec following the standard template in `_bmad-output/component-specs/` and add it to the table in `_bmad-output/project-context.md`.

**⚠️ Size Cap (80 lines for project-context.md):**
After adding a new spec to the table or a new architecture rule, check `project-context.md` line count. If it exceeds 80 lines, flag to user:
> "project-context.md is [N] lines. This file loads into EVERY workflow. Should we remove any outdated rules to keep it lean?"

### 5. Rule/Skill Gap Analysis (Refinement Loop)
After the fix is verified, ask:

> "Did this bug reveal a missing guardrail? Should we:
> - Add a new `🚫 Never` or `✅ Always` entry to `constitution.md`?
> - Create a new Model Decision rule to prevent this category of bug?
> - Enhance an existing skill (e.g., add a checklist step to `systematic-debugging`)?
>
> If no obvious gap, we're good."

### 6. Pattern Extraction
If the fix used a reusable pattern that could benefit other components:

> "This fix used [pattern]. Should I add it to the relevant Component Spec as a 'Proven Pattern' so future work on similar components inherits it?"

---

## What This Rule Does NOT Do
- It does NOT force you to update specs — it asks
- It does NOT modify specs without user approval
- It does NOT fire during planning-only workflows (create-story, create-prd)
- It does NOT fire mid-implementation — only at the end

## Why This Matters
The component specs are the project's "long-term memory." Every bug you fix teaches you something. If that learning stays in chat history, it's lost. If it gets appended to the spec, the next agent session inherits it automatically.

