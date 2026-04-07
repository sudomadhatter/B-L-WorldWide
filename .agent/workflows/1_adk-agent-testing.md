---
description: Full agent testing workflow — clean environment, select agent, launch adk web, chat, save evals, run evaluations, iterate on prompts
---

## Overview
Quick workflow to chat with any agent directly in the terminal using `adk run`.
**Does NOT require stopping the frontend or backend** — runs independently.

**Important:** `adk run` does NOT hot-reload. When you change `prompts.py`, you MUST exit (`exit`) and re-run.

---

## Workflow Steps

1. **Ask the user which agent to test.** Options:
   - `greeting` — Chuck (pre-login greeter)
   - `hr` — Mrs. Coleman (onboarding)
   - `specialist` — Capt. Lindbergh (aviation Q&A)

// turbo
2. **Start the interactive terminal session** with the selected agent via env var:
   ```
   $env:ADK_TEST_AGENT="<agent>"; backend\.venv\Scripts\adk.exe run backend
   ```
   Replace `<agent>` with the user's selection from step 1 (greeting, hr, or specialist).

3. **Chat with the agent.** Type messages and press Enter. Type `exit` to quit.

4. **If you change a prompt:**
   - Type `exit` to quit the session
   - Re-run step 2 — the agent reloads with the new prompt

---

## Notes
- `adk run` runs on its **own process** — no conflict with uvicorn (port 8000) or vite (port 5173)
- The session is ephemeral — conversation history is lost when you exit
- Tool calls and responses are logged to the terminal in real-time
- Agent selection is via `ADK_TEST_AGENT` env var — no file editing needed

## Adding New Agents
If the user asks to test an agent that isn't listed above, you must add it to `backend/agent.py`:
1. Add a new `elif` block with the import and `root_agent = ...` assignment
2. Add the agent name to the `VALID_AGENTS` list and the error message
3. Update the options list in step 1 of this workflow
