---
name: component-spec-compliance
description: "Activates whenever the agent is about to modify, create, or refactor any Python (.py) or React (.tsx/.ts) source file. Forces the Pre-Implementation Protocol from project-context.md."
activation: Model Decision
---

# Component Spec Compliance — Auto-Check Rule

## When This Rule Fires
- You are about to **create, modify, or delete** any `.py`, `.tsx`, or `.ts` file in `backend/` or `frontend/src/`
- You are about to **implement a tech-spec, story, or bug fix**

## Required Steps (Before Writing Code)

### 1. Run Pre-Implementation Protocol
Follow ALL steps in `_bmad-output/project-context.md` → "MANDATORY: Pre-Implementation Protocol":
- Read active-context → Read matching component spec → Research target file → Output `<spec-check>` block

**You MUST output the `<spec-check>` block before writing any code. No exceptions.**

### 2. Register Your Task
Append a task block to `_bmad-output/active-context/active-context.md` under `## Active Tasks`:
```markdown
### [TASK: Short Label — What You're Doing]
- **Status:** In Progress
- **Workflow:** dev-story / quick-dev / quick-spec / etc.
- **Files In Play:** list every file you plan to modify
- **Spec(s):** which component spec(s) you read
- **Problem:** one-line description
- **Started:** YYYY-MM-DD
```

### 3. Check for File Conflicts
If another active task lists a file you plan to modify under its "Files In Play," **that file is spoken for**. Alert the user:
> "⚠️ [filename] is listed as In Play by [TASK: other task name]. Should I proceed?"

### 4. Check Spec Existence (Story/Spec Creation Only)
If creating a story or spec and a component has NO spec in `_bmad-output/component-specs/`, ask:
> "This touches [component], which has no component spec. Want me to create one first?"

## What This Rule Does NOT Do
- Does NOT prevent writing code — requires reading first
- Does NOT apply to config, markdown, YAML, or non-source files
- Does NOT override user instructions — if user says "just do it," proceed
- Does NOT block on file conflicts — it warns, user decides

