---
description: Quick pipeline — clean start dev environment → bug report artifact → quick-spec → quick-dev for rapid live testing
---

# Quick Live Test Pipeline

A single command to spin up a clean dev environment for live testing, then flow directly into conversational spec engineering followed by implementation. The user is manually testing the front end and checking for bugs, then we troubleshoot them using BMAD Agile best practices to keep everything documented.

## Pipeline Overview

| Step | Phase                 | Purpose                                          |
| ---- | --------------------- | ------------------------------------------------ |
| 0    | Housekeeping          | Archive old artifacts, create fresh bug tracker   |
| 1    | Start Dev Environment | Kill zombies, start backend + frontend, verify   |
| 2    | Bug Report Artifact   | Record all bugs iteratively in a notes file      |
| 3    | `/bmad-bmm-quick-spec`| Convert bug notes → implementation-ready spec    |
| 4    | `/bmad-bmm-quick-dev` | Execute the spec → working code                  |

---

## Step 0: Housekeeping — Archive & Reset Artifacts

This step ensures the workflow can be called MID-CONVERSATION (not just a fresh chat). It archives any existing artifacts and creates a clean workspace for the testing session.

### 0a. Archive Existing Artifacts

Check if any of these artifacts exist in the current conversation's brain directory:
- `walkthrough.md`
- `task.md`
- `epic-4-bugs.md` (or any `*-bugs.md`)

If they exist and contain meaningful content (not just headers):
1. Rename them with a descriptive suffix: e.g., `walkthrough-4.14.md`, `task-4.14.md`
2. If they are empty/stub files, just delete them

**If the user says to skip archiving or delete old artifacts, obey.**

### 0b. Create Fresh Artifacts

Create these three fresh artifacts in the conversation brain directory.

> [!IMPORTANT]
> The `epic-4-bugs.md` artifact is the PRIMARY bug tracker. This is the user-facing document where ALL bugs, issues, and observations are logged during testing. It MUST be created before any testing begins.

**1. `epic-4-bugs.md`** — **PRIMARY bug tracker artifact** (MANDATORY):
```markdown
# Epic 4 — Bug Tracker

**Testing Date:** {{date}}
**Tester:** Daniel (manual frontend testing)
**Researcher:** Woz (root cause analysis)

---

## Open Bugs

*No bugs reported yet — standing by for live testing.*

---

## Resolved Bugs

*None yet.*
```

**2. `task.md`** — Fresh task tracker:
```markdown
# Epic 4 — Manual Frontend Testing

## Active
- [/] Manual frontend testing — recording bugs as discovered

## Completed
```

**3. `walkthrough.md`** — Fresh testing log:
```markdown
# Epic 4 — Manual Frontend Testing Walkthrough

**Date:** {{date}}
**Scope:** Live testing of Epic 4 features in the frontend

## Testing Log

*Testing has not started yet.*
```

### 0c. Confirm Housekeeping

Say:
> "Artifacts are clean. Ready to start the dev environment, or is it already running?"

If the user says the dev environment is already running, **skip to Step 2**.

---

## Step 1: Clean Start Development Environment

### 1a. Kill Existing Processes
Ensure no zombie processes are holding ports 8000 or 3000.

```powershell
// turbo-all
taskkill /F /IM uvicorn.exe
taskkill /F /IM python.exe
taskkill /F /IM node.exe
```

### 1b. Start Backend Server
Launch the FastAPI backend using the project venv.

```powershell
// turbo
cd c:\AGY-Projects\aviationChat-AGY
backend\.venv\Scripts\uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

**Wait for Backend:** Ensure backend logs show "Application startup complete" before proceeding.

### 1c. Start Frontend Server
Launch the Next.js development server.

```powershell
// turbo
cd c:\AGY-Projects\aviationChat-AGY\frontend
Start-Sleep -Seconds 5
npm run dev
```

> The 5-second sleep prevents a `TIME_WAIT` collision from the port kill above.

**Wait for Frontend:** Ensure frontend logs show "Local: http://localhost:3000/"

### 1d. Verify in Browser

```browser
// turbo
open_browser_page(url="http://localhost:3000")
screenshot_page(filename="startup_verification.png")
```

**Gate:** Do NOT proceed to Step 2 until:
- Backend shows "Application startup complete"
- Frontend shows "Local: http://localhost:3000/"
- Browser screenshot confirms the app loads

**Troubleshooting:**
- Backend "Module not found" → ensure you are in the root `c:\AGY-Projects\aviationChat-AGY` directory.
- Frontend fails to start → check if `npm install` is needed in `frontend/`.
- Frontend exits immediately with `Exit Code 1` → port still in TIME_WAIT; wait 5s and rerun `npm run dev`.
- Port 8000 still occupied → run `netstat -ano | findstr :8000` to find the PID.

---

## Step 2: Bug Report — Record All Issues

Before spec engineering, create a dedicated notes file and collect ALL bugs the user finds during live testing. This keeps the BMAD documentation trail clean and gives the spec a complete problem surface.

### 2a. Create the Bug Report File (if not created in Step 0)

Create: `_bmad-output/implementation-artifacts/bug-report-notes.md`

Seed it with this content:
```markdown
# Live Testing Bug Report Notes
*Input for Quick Spec. Records all bugs found during live testing.*

## Issues Found
```

Also update the `epic-4-bugs.md` artifact in the brain directory for each bug logged.

### 2b. Invite the User to Test

Say:
> "The dev environment is up. Head to `http://localhost:3000` and test away. When you spot a bug, tell me what you see — I'll research it, log it, and we'll spec them all together when you're done."

### 2c. Record Each Bug Iteratively

For every bug the user describes:
1. **Research first** — check the relevant source files to understand the root cause
2. **Update `epic-4-bugs.md` artifact** (PRIMARY — this is what the user sees):
```markdown
### Bug N: [Short Title]
- **Where:** [Page / component / route]
- **What happens:** [Observed behavior]
- **Expected:** [What should happen]
- **Root Cause:** [Best-effort analysis from code review]
- **Files Involved:** [List of relevant source files]
- **Severity:** High / Medium / Low
```
3. **Also append** to `_bmad-output/implementation-artifacts/bug-report-notes.md` (BMAD trail copy)
4. Confirm: "Logged ✅ — what else?"
5. Repeat until the user says they're done.

### 2d. Gate: Confirm All Bugs Captured

Summarize the logged bugs and ask:
> "Here's everything I've logged — does this capture all the issues, or did I miss anything?"

Wait for confirmation before proceeding.

---

## Step 3: Bug Report → Quick Spec

With all bugs captured, convert the notes into a single implementation-ready tech spec.

Say:
> "All bugs are logged. Loading the Quick Spec workflow now to turn these into an actionable spec."

IT IS CRITICAL THAT YOU FOLLOW THIS COMMAND: LOAD the FULL `{project-root}/_bmad/bmm/workflows/bmad-quick-flow/quick-spec/workflow.md`, READ its entire contents and follow its directions exactly!

Use `bug-report-notes.md` as the primary input for the spec's Problem Statement, Scope, and Tasks.

**Gate:** Once the spec is complete and approved:
> "Spec is locked. Want me to kick off the dev workflow and fix this now?"

If yes, proceed to Step 4. If not, stop here.

---

## Step 4: Quick Dev

Execute the development workflow against the approved spec.

IT IS CRITICAL THAT YOU FOLLOW THIS COMMAND: LOAD the FULL `{project-root}/_bmad/bmm/workflows/bmad-quick-flow/quick-dev/workflow.md`, READ its entire contents and follow its directions exactly!

**Reminder:** The dev environment from Step 1 is already running. Use it for live validation as you implement.

---

## Inverse Workflow

Sometimes we invert Steps 3 and 4: develop first, then reverse-document what was built.
- If the user requests this, still go back after implementation and spec it out for the BMAD trail.