---
description: Run the complete backend (pytest) and frontend (vitest/jest) test suites and report results.
---

# Run All Tests

This workflow runs the complete test suite for both backend and frontend of AviationChat.

## Steps

### 1. Run Backend Unit Tests
Navigate to the backend and run pytest:

// turbo
```powershell
cd c:\AGY-Projects\aviationChat-AGY
.\.venv\Scripts\pytest backend/tests/ -v
```

**Expected Output:** All tests should pass with detailed output

### 2. Run Backend Tests (Alternative - backend venv)
If the root venv is not configured:

```powershell
cd c:\AGY-Projects\aviationChat-AGY\backend
..\.venv\Scripts\pytest tests/ -v
```

### 3. Run Frontend Tests
Navigate to the frontend and run tests:

// turbo
```powershell
cd c:\AGY-Projects\aviationChat-AGY\frontend
npm test
```

**Expected Output:** All frontend tests should pass

### 4. Check Test Coverage (Optional)
Generate a coverage report for the backend:

```powershell
cd c:\AGY-Projects\aviationChat-AGY
.\.venv\Scripts\pytest backend/tests/ --cov=backend --cov-report=html
```

View the coverage report at `htmlcov/index.html`

## Test Organization

### Backend Tests
- **Location:** `backend/tests/`
- **Pattern:** `test_*.py` for unit tests
- **Run individual:** `.\.venv\Scripts\pytest backend/tests/test_<module>.py -v`

### Frontend Tests
- **Location:** `frontend/src/__tests__/` or adjacent to components
- **Pattern:** `*.test.tsx` or `*.spec.tsx`
- **Run individual:** `npm test <test-name>`

## Notes

- Always run tests before committing code
- Add tests for new features and bug fixes
- Aim for high test coverage on critical business logic (agents, auth, RAG pipeline)
- Use `/1_test_adk_terminal` for interactive ADK agent testing
