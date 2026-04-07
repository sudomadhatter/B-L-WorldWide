# Project Constitution: {{PROJECT_NAME}}

**Last Updated:** {{DATE}}
**Purpose:** This document is the **Project Constitution** for {{PROJECT_NAME}}. It defines data schemas, behavioral rules, and architectural invariants that all agents and developers must follow.

---

## 🏛️ Core Principles

1. **Accuracy Over Speed**: The system prioritizes correctness above all else.
2. **Single Source of Truth**: This file is **law**. Changes to schemas, rules, or architecture MUST be reflected here.
3. **Visual Containment**: All agents follow the `adk_file_formating.md` nesting pattern — no exceptions.

---

## 📊 Data Schemas

> **TODO**: Define your project's data schemas here.
> Example collections, document structures, and API contracts.

### User Schema (Cloud Firestore: `users` collection)

```json
{
  "profile": {
    "name": "string",
    "email": "string",
    "created_at": "timestamp",
    "last_active": "timestamp"
  }
}
```

### Session Context Schema (In-Memory / Firestore Cache)

```json
{
  "user_id": "string",
  "session_id": "string",
  "context": {},
  "timestamp": "timestamp"
}
```

---

## 🎯 Behavioral Rules

### Agent Communication Rules
1. **Agent Handoffs Must Be Clean**: When control transfers between agents, the receiving agent receives only the necessary context.
2. **No Hallucinations**: Agents MUST NOT fabricate citations or references. When uncertain, defer to verification.
3. **Sources Required**: All fact-based responses should be backed by evidence from your data stores.

---

## 🏗️ Architectural Invariants

### Agent Architecture (Visual Containment)
- **No abstract category folders** (`orchestrators/`, `specialists/`) are permitted.
- Parent Agents live in `backend/agents/<name>/`.
- Sub-Agents are nested in `backend/agents/<parent>/sub_agents/<name>/`.
- Shared tools live in `backend/tools/`.
- See `rules/adk_file_formating.md` for full standard.

### Agent Roster

> **TODO**: Define your agent roster here.

| Agent | Type | Role |
| ----- | ---- | ---- |
| `example/` | Parent | Example agent |

### Model Usage
| Model                    | Used For                            |
| ------------------------ | ----------------------------------- |
| `gemini-3-flash-preview` | Fast responses, routing, streaming  |
| `gemini-3-pro-preview`   | Reasoning, verification, grading    |

No legacy Gemini 2.x models are permitted.

---

## 🔄 Schema Change Protocol

When a schema changes:
1. Update this `gemini.md` file **FIRST**.
2. Update the affected agent or tool code.
3. Update the relevant PRD in `_bmad-output/planning-artifacts/`.
4. Test the change in isolation before deploying.

---

## 📝 Maintenance Log

### {{DATE}}
- Initialized `gemini.md` as Project Constitution from Clean BMAD Workspace template.

---

## 🛡️ Dev Agent Guardrails

### RULE G1: Session Boot
**TRIGGER:** Beginning a new task or opening a new session.
**ACTION:** Read `_bmad-output/active-context/active-context.md` FIRST. Output a brief `<context>` block confirming what's currently in progress.

### RULE G2: Component Spec Compliance
**TRIGGER:** Before modifying any file related to a component that has a spec.
**ACTION:** Read the relevant spec from `_bmad-output/component-specs/`. Check the "Invariants" section.

### RULE G3: Targeted Edits Only
**TRIGGER:** Modifying any existing `.py` or `.tsx` file.
**ACTION:** No full-file rewrites. Use targeted, surgical edits.

### RULE G4: Trace Data Chain Impact
**TRIGGER:** Touching any pipeline data flow.
**ACTION:** Before making changes, trace the data chain upstream and downstream.

### RULE G5: Agent Authority Boundaries
**TRIGGER:** Writing code in `backend/agents/`.
**ACTION:** Respect each agent's authority scope. Define scopes in the Agent Roster above.

### RULE G6: Firestore Singleton
**TRIGGER:** Any Firestore query or import.
**ACTION:** ALL Firestore access MUST go through `backend/database.py` → `get_db()`. Never create a new Firestore client directly.

### RULE G7: SSE Contract Protection
**TRIGGER:** Modifying SSE streaming (adding/removing/renaming event types).
**ACTION:** SSE event types are a backend↔frontend CONTRACT. Any change requires coordinated updates on BOTH sides.

### RULE G8: Research-First (Brownfield Mandate)
**TRIGGER:** Before modifying any existing file with more than 100 lines.
**ACTION:** You MUST first read or grep the target file to map its exports, types, and dependencies before suggesting edits.
