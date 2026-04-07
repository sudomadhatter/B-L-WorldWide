---
description: Kills existing node/python processes and starts the frontend and backend development servers.
---

# Restart Dev Environment Workflow

This workflow safely cleans up any stalled or zombie processes on your development ports and starts up both the FastAPI backend and Next.js frontend in one motion. It's best practice to run this after major changes or when you suspect zombie processes are holding ports 8000 or 3000.

## Step 1: Kill Existing Processes

We first ensure no zombie processes are running.

```powershell
// turbo-all
taskkill /F /IM uvicorn.exe
taskkill /F /IM python.exe
taskkill /F /IM node.exe
```

## Step 2: Start Backend Server

Launch the FastAPI backend using the project venv.

```powershell
// turbo
cd c:\AGY-Projects\aviationChat-AGY
backend\.venv\Scripts\uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

## Step 3: Start Frontend Server

Launch the Next.js development server. We introduce a small sleep to ensure ports have gracefully exited `TIME_WAIT` states from the kill command.

```powershell
// turbo
cd c:\AGY-Projects\aviationChat-AGY\frontend
Start-Sleep -Seconds 5
npm run dev
```

## Step 4: Verify in Browser

Open the application to confirm it loads correctly.

```browser
// turbo
open_browser_page(url="http://localhost:3000")
screenshot_page(filename="startup_verification.png")
```
