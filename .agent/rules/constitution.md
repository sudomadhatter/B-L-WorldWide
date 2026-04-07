---
name: constitution
description: "Non-negotiable behavioral boundaries for this project. Hard stops, confirmation gates, and mandatory practices."
activation: Always On
---

# Agent Constitution

## 🚫 Never

- Never fabricate FAA citations — if uncertain, defer to Reasoner or say "I don't know"
- Never edit a file without reading/grepping it first (files >100 lines: output `<codebase-analysis>` block)
- Never propose fixes without root cause investigation (see `systematic-debugging` skill)
- Never rewrite entire files — surgical, targeted edits only
- Never create abstract category folders for agents (no `orchestrators/`, `specialists/`)
- Never hardcode secrets, API keys, or credentials
- Never skip `<spec-check>` block before modifying a spec'd component
- Never create a new Firestore client — use `backend/database.py` → `get_db()` singleton
- Never assume when a request is vague — research the codebase, then ask 1-6 specific clarifying questions
- Never modify SSE event contracts without updating BOTH backend + frontend + `frontend-sse.md` spec

## ⚠️ Ask First

- Before deleting any file or removing any agent
- Before installing or upgrading dependencies (see `dependency-awareness` rule)
- Before changing Firestore schemas, security rules, or database topology
- Before modifying CI/CD, deployment, or environment configs
- Before any architectural change that crosses component boundaries

## ✅ Always

- Always read `active-context.md` at session start — output `<context>` block before coding
- Always read the Component Spec before modifying a spec'd component — check Invariants
- Always trace data flow upstream + downstream before modifying pipeline data
- Always restart affected services after backend `.py` changes
- Always run tests after changes
- Always use absolute imports (`from backend.agents.specialist...`)
- Always update `active-context.md` at session end
- Always follow ONE job per agent: Orchestrator routes, Talker streams, Reasoner verifies, Admin grades, Socratic teaches
- Always back Specialist fact-based responses with DB1 or DB2 evidence

