---
trigger: model_decision
description: "Activates when the user says 'reset', 'restart', 'reboot', 'refresh', or 'reload' any server, agent, frontend, or backend. Provides exact commands for each service."
---

# Server Reset / Restart Commands

When the user asks to **reset**, **restart**, **reboot**, **refresh**, or **reload** any service, execute the correct commands below immediately — do NOT ask for clarification unless the target is ambiguous.

---

## Reset Targets

### "Reset the backend" / "Restart the API" / "Restart uvicorn"

1. Find and kill the running `uvicorn` process
2. Restart it:
```powershell
backend\.venv\Scripts\uvicorn backend.main:app --host 0.0.0.0 --port 8000
```
Working directory: `{{PROJECT_PATH}}`

---

### "Reset the frontend" / "Restart the frontend" / "Restart next/vite"

1. Find and kill the running `npm run dev` process
2. Restart it:
```powershell
npm run dev
```
Working directory: `{{PROJECT_PATH}}\frontend`

---

### "Reset the agent" / "Restart adk" / "Restart adk web"

**Important:** `adk web` does NOT hot-reload. Prompt changes in `prompts.py` require a full restart.

1. Kill the running `adk web` process (Ctrl+C or kill process)
2. Restart it:
```powershell
backend\.venv\Scripts\adk.exe web backend --port 8001
```
Working directory: `{{PROJECT_PATH}}`

---

### "Reset everything" / "Restart all" / "Full reset"

Kill all three services and restart them in order:
1. Kill all Python/Node processes
2. Start backend: `uvicorn backend.main:app --host 0.0.0.0 --port 8000`
3. Start frontend: `npm run dev` (in `frontend/`)
4. (Only if testing) Start ADK: `adk web backend --port 8001`

---

## Key Facts
- **Backend** (FastAPI/uvicorn) runs on port **8000**
- **Frontend** (Next.js) runs on port **3000** (default) or **5173** (Vite)
- **ADK Web** (testing UI) runs on port **8001**
- ADK Web and the FastAPI backend can run **simultaneously** on different ports
- Prompt changes (`prompts.py`) require an ADK web restart — there is no hot-reload

---

## ⚠️ Proactive Restart Reminder (ALWAYS FOLLOW)

**After making ANY backend Python code changes** (`.py` files in `backend/`), you MUST:

1. **Check if uvicorn is running WITH `--reload`:**
   - If the uvicorn command includes `--reload`, changes auto-apply — no restart needed
   - If the uvicorn command does NOT include `--reload`, a manual restart IS required

2. **Before the user tests any backend changes**, always say:
   > ⚠️ **Restart Required:** I changed backend Python files. Please restart the backend server before testing. Want me to restart it for you?

3. **Never assume hot-reload is active.** Always check the running terminal command to verify.

4. **Frontend changes** (Next.js/Vite) typically hot-reload automatically — no reminder needed unless the dev server was started in production mode.
