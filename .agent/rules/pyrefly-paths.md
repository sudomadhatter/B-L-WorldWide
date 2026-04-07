---
description: Pyrefly type checker configuration rules for Windows environments
activation: Always On
---

# Pyrefly Path & Type Safety Rules

## 1. Always Use Double Backslashes in `pyrefly.toml`

On Windows, Pyrefly requires **native path separators** (double backslashes in TOML). Forward slashes (`c:/...`) cause silent config failures where `search roots` report as empty `()`.

**✅ Correct:**
```toml
python-interpreter-path = "c:\\AGY-Projects\\aviationChat-AGY\\.venv\\Scripts\\python.exe"
search_path = [
    "c:\\AGY-Projects\\aviationChat-AGY",
    "c:\\AGY-Projects\\aviationChat-AGY\\.venv\\Lib\\site-packages"
]
```

**❌ Wrong:**
```toml
python-interpreter-path = "c:/AGY-Projects/aviationChat-AGY/.venv/Scripts/python.exe"
```

## 2. Pyrefly Does NOT Hot-Reload Config

After editing `pyrefly.toml`, the user **must** reload the IDE window:
- `Ctrl+Shift+P` → `"Developer: Reload Window"`
- Always remind the user of this step after any `pyrefly.toml` change.

## 3. Type Narrowing Workarounds

Pyrefly has known limitations with type narrowing after try/except blocks and dict union types.

### Optional attribute access after try/except
Extract to a typed variable before use:
```python
# ❌ Pyrefly can't infer .lesson_content on Optional[ACSContext]
async for chunk in agent.stream(lesson_content=ctx.lesson_content if ctx else None):

# ✅ Extract with explicit type annotation
content: Optional[str] = ctx.lesson_content if ctx else None
async for chunk in agent.stream(lesson_content=content):
```

### Dict mutation on union types
Build a new dict explicitly instead of mutating:
```python
# ❌ Pyrefly rejects __setitem__ on dict union
result["status"] = "partial"

# ✅ Reconstruct explicitly
result = {
    "status": "partial",
    "data": result.get("data", []),
}
```

## 4. "Could not find import" with Correct Config

If `pyrefly.toml` has correct `search_path` but lint still shows `search roots ()`:
1. Verify paths use `\\` not `/`
2. Reload IDE window
3. If still broken: `Ctrl+Shift+P` → `"Python: Clear Cache and Reload"`
4. **Check for missing `__init__.py`** — Every directory in the import chain must have one. Python 3 runs without them (implicit namespace packages), but Pyrefly requires explicit `__init__.py` files. Run:
   ```powershell
   # Find directories with .py files but no __init__.py
   Get-ChildItem -Path backend\agents -Recurse -Directory | Where-Object { (Get-ChildItem $_.FullName -Filter *.py).Count -gt 0 -and -not (Test-Path "$($_.FullName)\__init__.py") }
   ```
