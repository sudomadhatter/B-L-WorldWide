# 🚀 Clean Optimized BMAD Workspace

**Version:** 1.0.0
**Created:** 2026-03-28

A **ready-to-go project template** with all tooling, rules, BMAD method, agent skills, and development conventions pre-configured. Designed to eliminate months of manual setup by extracting battle-tested infrastructure from production projects.

---

## ⚡ Quick Start — New Project Setup

### 1. Copy This Workspace
```bash
# Copy to your new project directory
xcopy /E /I "clean-bmad-workspace" "your-new-project-AGY"
```

### 2. Find & Replace Placeholders
Search for these placeholders and replace them with your project values:

| Placeholder | Replace With | Where Used |
|------------|-------------|-----------|
| `{{PROJECT_NAME}}` | Your project name (e.g., "MyApp") | `.agent/`, `_bmad-output/`, `.env.example` |
| `{{PROJECT_PATH}}` | Full path (e.g., `c:\AGY-Projects\my-app-AGY`) | `.agent/rules/server-restart.md` |
| `{{PROJECT_DESCRIPTION}}` | One-line description | `_bmad-output/project-context.md` |
| `{{DATE}}` | Current date | `.agent/gemini.md`, `active-context.md` |
| `{{USER_NAME}}` | Your name | BMAD configs |

### 3. Set Up Python Backend
```bash
cd your-new-project-AGY
python -m venv .venv
.venv\Scripts\activate
pip install -r backend/requirements.txt   # Create from docs/tech-stack.md template
```

### 4. Set Up Frontend
```bash
cd frontend
npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir
npm install   # Add dependencies from docs/tech-stack.md template
```

### 5. Configure Pyrefly
Uncomment and update paths in `pyrefly.toml`:
```toml
[default]
python-interpreter-path = "c:\\AGY-Projects\\your-project\\.venv\\Scripts\\python.exe"
search_path = [
    "c:\\AGY-Projects\\your-project",
    "c:\\AGY-Projects\\your-project\\.venv\\Lib\\site-packages"
]
```

### 6. Set Up Environment
```bash
mkdir auth_keys
copy .env.example auth_keys\.env
# Edit auth_keys/.env with your real API keys
```

### 7. Install Agent Skills
```bash
# Official Google skills
npx skills add firebase/agent-skills
npx skills add google-gemini/gemini-skills

# See docs/skills-registry.md for more options
```

### 8. Start Building!
```
/bmad-bmm-create-product-brief    # Start with a product brief
/bmad-bmm-create-prd              # Create a PRD
/bmad-bmm-create-architecture     # Design the architecture
/bmad-bmm-create-epics-and-stories # Break into implementation tasks
/bmad-bmm-dev-story               # Start building!
```

---

## 📁 Directory Structure

```
your-project/
├── .agent/                    # AI Agent configuration
│   ├── README.md              # Agent directives & architecture
│   ├── gemini.md              # Project Constitution (schemas, rules, guardrails)
│   ├── rules/                 # 9 mandatory rule files
│   ├── skills/                # 633+ pre-installed agent skills
│   └── workflows/             # Slash-command workflows
│
├── .gemini/                   # Gemini IDE configuration
│   ├── GEMINI.md              # Master system prompt
│   └── notes.md               # Session scratchpad
│
├── .vscode/                   # VS Code settings
│
├── _bmad/                     # BMAD Method engine (785 files)
│   ├── bmm/                   # Business Model Method module
│   ├── core/                  # Core module (agents, workflows)
│   └── tea/                   # Test Architecture Enterprise module
│
├── _bmad-output/              # BMAD artifacts (fill per project)
│   ├── active-context/        # Sprint state tracking
│   ├── component-specs/       # Component reference cards
│   ├── implementation-artifacts/
│   ├── planning-artifacts/    # PRD, Architecture docs
│   ├── test-artifacts/        
│   └── project-context.md     # Project-specific patterns
│
├── docs/                      # Project documentation
│   ├── tech-stack.md          # Our preferred technology defaults
│   └── skills-registry.md    # Curated agent skills + install guide
│
├── backend/                   # Python backend scaffold
│   ├── agents/                # ADK agent roster
│   ├── routers/               # FastAPI endpoints
│   ├── schemas/               # Pydantic models
│   ├── services/              # Shared services
│   ├── tools/                 # Shared tools (pure Python)
│   └── tests/                 # Test suite
│
├── frontend/                  # Frontend scaffold
│
├── conftest.py                # Root pytest config
├── pyproject.toml             # Pytest settings
├── pyrefly.toml               # Python type checker config
├── pyrightconfig.json         # Pyright config
├── .env.example               # Environment template
├── .gitignore                 # Comprehensive ignore rules
└── .gitattributes             # LF normalization
```

---

## 🔧 What's Pre-Configured

### Agent Rules (`.agent/rules/`)
9 battle-tested rule files covering:
- Visual Containment architecture enforcement
- Gemini 3.0 model standards
- Server restart automation
- Code quality & best practices
- ADK prompt engineering taxonomy
- Windows terminal workarounds

### BMAD Method (`_bmad/`)
Complete installation with 785 files across 3 modules:
- **BMM** — Stories, sprints, epics, project management
- **Core** — Agent personas, workflow engine, templates
- **TEA** — Test architecture, CI pipelines, traceability

### Agent Skills (`.agent/skills/`)
633+ pre-installed skills including:
- Full BMAD skill suite (40+ workflows)
- Firebase & GCP patterns
- Python & React best practices
- UI/UX Pro Max design skill
- Systematic debugging methodology

### Dev Workflows (`.agent/workflows/`)
Slash-command workflows for:
- `/1_run-restart-dev-env` — Clean server restart
- `/1_run-all-tests-back_front` — Full test suite
- `/1_check-for-tech-stack-updates` — Audit dependencies
- `/1_adk-agent-testing` — ADK agent testing flow
- All BMAD lifecycle commands

---

## 📚 Key Documentation

| Document | Purpose |
|----------|---------|
| [docs/tech-stack.md](docs/tech-stack.md) | Our preferred technology defaults with versions |
| [docs/skills-registry.md](docs/skills-registry.md) | Curated GitHub skills + install commands |
| [.agent/README.md](.agent/README.md) | Agent directives & architecture |
| [.agent/gemini.md](.agent/gemini.md) | Project Constitution template |

---

## 🍎 Our Standard

> If it doesn't feel like it came from Apple's design lab and function with the reliability of an aircraft system — **it's not finished.**
