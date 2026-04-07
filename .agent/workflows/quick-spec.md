---
description: Component-spec-aware quick spec for bug fixes and features. Reads active-context and component-specs before generating a tech-spec.
---

# Quick-Spec Workflow (Component-Spec Aware)

This workflow replaces the default `/bmad-bmm-quick-spec` for AviationChat. It ensures every tech-spec is grounded in component specifications and project invariants.

## Prerequisites
- `_bmad-output/active-context/active-context.md` exists and is current
- `_bmad-output/component-specs/` contains relevant specs
- `.agent/gemini.md` guardrails (G1-G8) are active

---

## Steps

### Step 1: Boot Context
// turbo
Read `_bmad-output/active-context/active-context.md` to understand:
- What's currently in progress
- What's broken vs. stable
- Files currently in play
- Known pitfalls

Output a brief `<context>` summary confirming the current state.

### Step 2: Identify Affected Components
Based on the user's bug description or feature request, identify which component spec(s) are relevant:
- `specialist-pipeline.md` — RAG pipeline issues
- `socratic-teaching.md` — Teach Me / Socratic loop issues
- `admin-grading.md` — Grading / mastery transition issues
- `frontend-sse.md` — Streaming / UI state issues
- `dashboard-mastery-ui.md` — Dashboard / Drawer / mastery visualization issues

// turbo
Read the relevant component spec(s) from `_bmad-output/component-specs/`.

### Step 3: Research the Codebase (G8 Compliance)
// turbo
For each file that will need modification:
1. Read or grep the file to understand its current structure
2. Map its exports, imports, and dependencies
3. Check the component spec's "Invariants" section

Output a `<codebase-analysis>` block confirming what exists.

### Step 4: Ask Clarifying Questions
Ask the user 1-5 targeted questions about:
- The exact symptom they observe
- Whether this is a regression or a new behavior
- Expected vs. actual behavior
- Any error messages or logs they've seen

**Do NOT proceed until the user has answered.**

### Step 5: Generate Tech-Spec
Produce a focused tech-spec document containing:

```markdown
# Tech-Spec: [Bug/Feature Title]

## Problem Description
[Clear description of the bug or feature from the user]

## Relevant Component Spec(s)
- [Link to component spec(s)]

## Invariants That MUST Be Preserved
- [List invariants from the spec that apply]

## Root Cause Analysis
[What's wrong and why — grounded in codebase analysis]

## Proposed Fix / Implementation
### Files to Modify:
| File | Change | Why |
|------|--------|-----|
| `path/to/file` | [specific change] | [reason] |

### Impact Chain
- **Upstream**: [What feeds this code]
- **Downstream**: [What consumes this code's output]
- **Potential Side Effects**: [What else could break]

## What "Done" Looks Like
- [ ] [Observable, testable criteria]
- [ ] [Observable, testable criteria]

## Tests
- [ ] [How to verify the fix]
```

### Step 6: Save the Tech-Spec
// turbo
Save the tech-spec to `_bmad-output/implementation-artifacts/tech-specs/tech-spec-[name].md`.

### Step 7: Update Active Context
// turbo
Update `_bmad-output/active-context/active-context.md` with:
- Any new "Files Currently In Play"
- Any new "Known Pitfalls" discovered during analysis
