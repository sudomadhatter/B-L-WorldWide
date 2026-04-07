---
name: qa-code-review-reporting
description: "Activates when the QA agent is running, forcing it to document any patches or fixes it makes during code review."
activation: Model Decision
---

# QA Code Review Reporting — Auto-Check Rule

## When This Rule Fires
- You are acting in the capacity of the **QA Agent (Quinn)** or performing an adversarial code review.
- You are automatically implementing patches or fixes behind the scenes as a result of that review.

## Required Steps: Document Your Fixes

Transparency is critical. The user and the Primary Developer must know exactly what you altered during your review pass.

Whenever you patch, format, or modify code, you MUST document it by appending to the current session's `walkthrough.md` artifact.

### 1. Identify the Walkthrough File
Locate the active `walkthrough.md` artifact (either in your environment's artifact directory or the `_bmad-output` directory).

### 2. Append the QA Section
Add a new subsection titled exactly:
`### QA Review Fixes`

### 3. Detail the Patches
Provide a concise, bulleted list of the files changed and the specific logic, edge case, or bug that was patched.

**Example Output:**
```markdown
### QA Review Fixes
- `backend/routers/auth.py`: Patched a missing await on the token verification call.
- `frontend/src/components/Sidebar.tsx`: Fixed a potential state race condition with the drawer toggle.
```

## What This Rule Does NOT Do
- Does not prevent you from making necessary fixes to pass tests.
- Does not require you to ask for permission to make minor typo or syntax fixes (unless another rule overrides this).
- It simply enforces an **audit trail** so fixes aren't silently lost to the ether.
