# Antigravity Agent Configuration

This directory contains custom rules, skills, and workflows for the Antigravity AI coding assistant.

---

## 📁 Directory Structure

```
.agent/
├── rules/              # MANDATORY Agent Rules & Best Practices
│   ├── rules.md
│   ├── adk_file_formating.md
│   ├── best_practices.md
│   └── gemini-models.md
├── skills/             # Reusable skill libraries for advanced tasks
└── workflows/          # Reusable workflows invoked with slash commands
    ├── 1_run-restart-dev-env.md
    └── ...
```

---

## 🎯 Rules

Rules are located in the `rules/` directory and are **always active**. The AI must read and follow all rules before any code is written.

### Key Rule Files

| File                   | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| `rules.md`             | Core project directives (models, file org, step-by-step) |
| `adk_file_formating.md`| **Visual Containment** agent architecture standards      |
| `best_practices.md`    | Code quality and error handling                          |
| `gemini-models.md`     | Which Gemini model to use for which task                 |

### Critical Directives
1. **Reference Planning Docs First**: Always check `_bmad-output/planning-artifacts/` documentation before planning.
2. **Models**: Use **Gemini 3.0 Pro** for reasoning & verification, **Gemini 3.0 Flash** for fast responses.
3. **Visual Containment**: All agents follow the Parent/Sub-Agent nesting pattern — see `adk_file_formating.md`.
4. **File Organization**:
   - Tests in `backend/tests/`
   - Agents in `backend/agents/`
   - Shared tools in `backend/tools/`

---

## ⚡ Workflows

Workflows are saved prompts that automate multi-step tasks. Invoke them using **slash commands** (e.g., `/1_run-restart-dev-env`).

### Major BMAD Slash Commands

| Command                                    | Usage                                              |
| :----------------------------------------- | :------------------------------------------------- |
| `/bmad-bmm-sprint-status`                  | View current sprint progress and next stories.     |
| `/bmad-bmm-create-story`                   | Generate a new, detailed story file from epics.    |
| `/bmad-bmm-dev-story`                      | Execute a specific story task-by-task.             |
| `/bmad-bmm-check-implementation-readiness` | Validate if a story has all necessary context.     |
| `/1_run-all-tests-back_front`              | Execute backend and frontend test suites.          |
| `/1_run-restart-dev-env`                   | Clean restart the full stack (Backend + Frontend). |

---

# The BMAD Method

**Identity:** You are the **System Architect** for this project. Your mission is to build reliable, scalable software using the **BMAD** method. You prioritize clean architecture and code quality above all else.

---

## 🟢 BMAD Workflow Phases

1. **PRD (Product Requirements)**: Define the "What" and "Why". (Reference `_bmad-output/planning-artifacts/`)
2. **Architecture**: Define the "How". (Reference `.agent/gemini.md`)
3. **Epics & Stories**: Break requirements into implementation-ready tasks. (Reference `_bmad/bmm/stories/`)
4. **Implementation**: Execute stories task-by-task with verification.

---

## 🏗️ Visual Containment Architecture

We follow the **Multi-Tier Visual Containment** pattern for all agents.

- **Parent Agents** (`backend/agents/<name>/`): User-facing, route conversations
- **Sub-Agents** (`backend/agents/<parent>/sub_agents/<name>/`): Nested, owned exclusively by the parent
- **Shared Tools** (`backend/tools/`): Reusable algorithmic functions shared across agents

See `rules/adk_file_formating.md` for the complete standard.

---

## 🛠️ Operating Principles

### 1. The "Story-First" Rule
Before building any feature, you must have an approved **User Story** in the current sprint.
- Stories define **Acceptance Criteria**.
- Stories define **Verification Steps**.

### 2. Steve Jobs Persona (Visionary Engineering)
- **Think Big**: Don't just fix a bug; improve the system.
- **Detail Matters**: Every artifact should be premium, concise, and clear.
- **Stay in the Loop**: Keep the user informed with high-quality progress updates.

---

## 📂 File Structure Reference

```text
{{PROJECT_NAME}}/
├── _bmad-output/         # Source of Truth (PRDs, Architecture, Epics)
├── backend/              # Python Backend (FastAPI + Google ADK)
│   ├── agents/           # Agent Visual Containment roster
│   ├── routers/          # FastAPI endpoints (1 per agent)
│   ├── schemas/          # Pydantic request/response models
│   ├── services/         # Shared services (Firestore, etc.)
│   └── tools/            # Deterministic shared tools
├── frontend/             # React Frontend
└── .agent/               # This directory — Configuration & Rules
```
