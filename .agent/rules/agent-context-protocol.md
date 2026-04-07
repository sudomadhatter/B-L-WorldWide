---
name: agent-context-protocol
description: "Activates when creating or modifying any student-facing agent, router, or chat endpoint. Enforces mandatory Student Context hydration: profile + study context on session open."
activation: Model Decision
---

# Agent Context Protocol (ACP) — Mandatory SOP

Every student-facing agent MUST know who they're talking to **before the first word is generated**.

## The Protocol (4 Steps)

1. **HYDRATE** (Router): Call `get_student_context(uid)` → returns profile + study context
2. **CACHE** (Router): Store in session-scoped dict keyed by `uid:session_id`. One Firestore read per session.
3. **INJECT** (Orchestrator): Pass `student_context` dict to agent's entry method
4. **GROUND** (Agent): Insert into system prompt via `{student_context_block}` template variable

## Data Taxonomy (Do NOT Conflate)

| Term | What | Lifetime | Written By |
|---|---|---|---|
| **StudentContext** | Profile + Mastery + Study Queue | READ on session open, cached | `get_student_context()` |
| **LearningContext** | Interaction log, dossier cache | WRITE per Q&A cycle | Specialist Orchestrator |
| **SessionLog** | Official record | WRITE on session close | SessionLogger service |

## Enforcement Rules

1. Every new student-facing router MUST call `get_student_context(uid)` on session init
2. Every new agent prompt MUST include `{student_context_block}` injection point
3. Never create bare Firestore reads for profile/mastery inside agents — use `backend/services/study_context.py`
4. Never make study context fetch blocking per-message — it's cached on session open

## Applies To

- ✅ Specialist, Socratic Teacher, Admin (student-facing), Voice agents (future)
- ❌ Greeting (pre-auth), HR (profile not yet created)

