# ADK Agent Build Rules (Visual Containment)

This document mandates the strict rules for agent creation and structuring. We use the **Multi-Tier Visual Containment** architecture.

---

## 1. No Abstract Category Folders

You may **never** create abstract grouping folders like `orchestrators/` or `specialists/` inside `backend/agents/`. The folder name IS the agent name.

---

## 2. Parent Agents vs. Sub-Agents

**Parent Agent**: If a `router` in `backend/routers/` directly calls an agent, it is a Parent Agent.
- **Location**: `backend/agents/<agent_name>/`

**Sub-Agent**: If an agent exists solely to support a single parent agent, it is a Sub-Agent.
- **Location**: `backend/agents/<parent>/sub_agents/<sub_agent_name>/`

---

## 3. The Component Pattern

Every agent (parent or sub-agent) MUST strictly separate logic from instructions.

| File          | Purpose                                                |
| ------------- | ------------------------------------------------------ |
| `agent.py`    | Logic, execution flow, SDK usage, tool bindings        |
| `prompts.py`  | Persona, system instruction string, message formatting |
| `__init__.py` | Exports the agent object                               |
| `evals/`      | *(Optional)* ADK evaluation data (`.test.json`, `.evalset.json`, `test_config.json`) |

> **Rule**: No instruction strings may live in `agent.py`. No Python logic may live in `prompts.py`.

> ⚠️ **`__init__.py` is required at EVERY directory level in the agent tree** — including intermediate `sub_agents/` directories, not just leaf agent folders. Python 3 implicit namespace packages allow code to run without them, but Pyrefly static analysis will fail to resolve imports through the package chain.

---

## 4. Permitted Exceptions to Component Pattern

Agent-local schema and service files are permitted ONLY when they are verifiably not shared by any other agent.

> **Rule**: If a Pydantic model or service is used by multiple agents, it MUST move to `backend/schemas/` or `backend/services/`.

---

## 5. Universal Tools (The Global Shed)

If a utility function is needed by multiple independent agents, it **must** live in `backend/tools/` as a pure Python module with no ADK agent framework dependencies.

---

## 6. The Dependency Proxy Pattern

When a local sub-agent heavily depends on a global tool, it must use a **Proxy File** for visual clarity.

1. Create `_<tool_name>_proxy.py` inside the agent's `sub_agents/` directory.
2. The proxy file must only import from the tools folder:

```python
"""
VISUAL CONTAINMENT PROXY
This file exists solely to visually map the dependency structure.
"""
from backend.tools.example_tool import ExampleTool
```

---

## 7. Implementation Rules

1. **Inheritance**: Use `google.adk.agents.LlmAgent` (unless a hand-coded orchestrator is needed for complex async flows).
2. **Model**: Use `google.adk.models.Gemini`. Always pass `api_key=os.getenv("GEMINI_API_KEY")`.
3. **Tools**: Register tools using `FunctionTool`.
4. **Absolute Imports**: ALWAYS use absolute imports (e.g., `from backend.agents.example.agent import ...`).

---

## 8. Project Architecture Diagram Template

```text
backend/
├── tools/
│   └── (shared tools here)
│
└── agents/
    ├── example_parent/              (Parent Agent)
    │   ├── __init__.py
    │   ├── agent.py
    │   ├── prompts.py
    │   ├── evals/                   (ADK evaluation data)
    │   └── sub_agents/
    │       ├── __init__.py
    │       └── example_sub/         (Sub-Agent)
    │           ├── __init__.py
    │           ├── agent.py
    │           └── prompts.py
    │
    └── another_parent/              (Another Parent Agent)
        ├── __init__.py
        ├── agent.py
        └── prompts.py
```
