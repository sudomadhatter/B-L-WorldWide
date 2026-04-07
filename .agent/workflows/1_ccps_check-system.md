---
description: Diagnostic and admin command for the CCPS system. Lists component specs, shows guardrails, reviews project-context, and lets you update or add specs. Run when troubleshooting the agent or doing system maintenance.
---

# Check System (`/1_check-system`)

One-stop diagnostic for the Context Collapse Prevention System. Use when:
- The agent seems confused and you want to verify what it loaded
- You want to review specs, guardrails, or architecture rules
- You need to add a new component spec or update an architecture rule

## Step 1: System Status Overview
// turbo
Read these files and show a combined status dashboard:

**Active Context** (`_bmad-output/active-context/active-context.md`):
- Sprint objective
- Active task count
- Known pitfalls

**Component Specs** (list `_bmad-output/component-specs/`):

| Spec | Scope |
|------|-------|
| `specialist-pipeline.md` | Expert Witness 4-lane RAG pipeline |
| `socratic-teaching.md` | Teach Me / Socratic multi-turn loop |
| `admin-grading.md` | Admin Agent / Cognitive Dossier / mastery |
| `frontend-sse.md` | SSE event contract, streaming, UI state |
| `dashboard-mastery-ui.md` | Dashboard, mastery visualization, Drawer |

**Guardrails** (from `.agent/gemini.md`):

| Rule | Trigger | Action |
|------|---------|--------|
| **G1** | New session | Read active-context FIRST |
| **G2** | Modifying spec'd component | Read spec, check invariants |
| **G3** | Modifying `.py`/`.tsx` | Surgical edits, no rewrites |
| **G4** | Touching pipeline data | Map upstream/downstream |
| **G5** | Writing agent code | Respect scope boundaries |
| **G6** | Firestore query | Use `get_db()` only |
| **G7** | Changing SSE events | Coordinate frontend + backend |
| **G8** | Modifying files >100 lines | Read/grep before editing |

**Project Context** (`_bmad-output/project-context.md`):
- Architecture rules count
- Spec table sync status (any specs exist in folder but not listed? or listed but missing?)

## Step 2: Health Check
// turbo
Verify system integrity:
- All specs listed in `project-context.md` exist as files ✓/✗
- All spec files in folder are listed in `project-context.md` ✓/✗
- Active-context is under 60 lines ✓/✗
- Each component spec is under 120 lines ✓/✗
- project-context.md is under 80 lines ✓/✗

Flag any failures.

## Step 3: What Do You Need?
Ask:
> "System status loaded. What would you like to do?
> 1. **Read a spec** — I'll show its invariants, data flow, and failure modes
> 2. **Add a new spec** — for a component not yet covered
> 3. **Update a rule** — architecture rule or guardrail change
> 4. **Nothing** — just wanted the overview"

**Wait for user response.**

## Step 4: Execute (if requested)

**If reading a spec:** Read the full spec and highlight Invariants, Failure Modes, and Known Pitfalls.

**If adding a spec:**
1. Ask: component name, key files, invariants
2. Create from template: `_bmad-output/component-specs/_template.md`
3. Add to project-context.md spec table

**If updating a rule:**
1. Ask: what changed and why
2. Update project-context.md and/or `.agent/gemini.md`
3. If it impacts a spec, update that spec too

## Step 5: Confirm
// turbo
Show what was changed (if anything) and confirm system is healthy.

