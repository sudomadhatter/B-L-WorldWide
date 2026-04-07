---
name: terminal-windows-fix
description: "Forces cmd /c prefix on all Windows terminal commands to prevent visible PowerShell window pop-ups caused by the Antigravity v1.19.4 child_process.spawn regression."
activation: Always On
---

# Terminal Execution Rule (Windows Pop-up Fix)

## Problem
Antigravity v1.19.4 has a regression where `child_process.spawn()` does not apply the `windowsHide` flag, causing every background shell command to flash a visible PowerShell/CMD window.

## Rule
When executing **any** terminal command on Windows, **always** prefix with `cmd /c`.

### Examples
- Instead of `npm run dev`, execute `cmd /c npm run dev`
- Instead of `python -m pytest`, execute `cmd /c python -m pytest`
- Instead of `git status`, execute `cmd /c git status`

## Why
`cmd /c` forces the Windows Command Processor to execute the command and then **terminate immediately**, sending the necessary EOF signal to the IDE. This prevents the shell process from lingering and reduces visible window flashing.

