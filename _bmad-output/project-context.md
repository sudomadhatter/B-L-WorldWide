# Project Context — {{PROJECT_NAME}}

**Purpose:** This file ensures BMAD agents (quick-spec, quick-dev, dev-story) are aware of project-specific architectural patterns and constraints that are NOT captured in generic BMAD templates.

---

## Project Identity
- **Product**: {{PROJECT_NAME}} — {{PROJECT_DESCRIPTION}}
- **Tech Stack**: Next.js (frontend) + Python/FastAPI (backend) + Google ADK + Firestore + Vertex AI Search
- **Architecture**: Multi-agent system using Google Agent Development Kit (ADK), Visual Containment nesting pattern

---

## Component Spec Protocol

Before implementing any change, check `_bmad-output/component-specs/` for a relevant reference card. If one exists, **read it first**. Your implementation MUST NOT violate any listed invariant. If a change would break an invariant, flag it before proceeding.

### Available Specs:
| Spec | Scope |
|------|-------|
| *None yet — add specs as components are built* | |

### When to Read a Spec:
- **Before any bug fix**: Identify which component(s) are affected → read their spec(s)
- **Before any new feature**: Check if the feature touches a spec'd component → read for invariants
- **When unsure about data flow**: The spec's "Data Flow" section maps the chain

---

## Active Context Protocol

At the start of every new session or task, read `_bmad-output/active-context/active-context.md` for:
- Current sprint objective
- What's working vs. broken
- Files currently in play
- Known pitfalls from recent bugs

Update this file before closing your session.

---

## Critical Architecture Rules

### Firestore Singleton
All Firestore access goes through `backend/database.py` → `get_db()`. Never create a new Firestore client.

### Agent Authority Boundaries
Each agent has a single responsibility. See `.agent/gemini.md` → Rule G5 for the full scope list.

### SSE Event Contract
Backend event types are a strict contract with the frontend. Adding or removing event types requires coordinated changes on both sides.

---

## Dev Agent Guardrails Reference
Full guardrail definitions (G1-G8) are in `.agent/gemini.md` under "🛡️ Dev Agent Guardrails".
