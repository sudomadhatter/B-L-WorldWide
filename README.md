# B&L WorldWide Repository

**⚠️ AI AGENT INSTRUCTIONS: READ THIS FIRST**
Welcome to the B&L WorldWide repository. This README serves as the primary system instruction manual for LLM agents (like Antigravity) setting up a fresh development environment (IDE) or performing onboarding for this codebase.

## 📁 Repository Architecture

This is a monorepo containing a full-stack web application:

1. **`website/` (Frontend)**: A React + Vite single-page application tailored for high-end cinematic user experiences.
2. **`backend/` (Backend)**: A Python FastAPI microservice layer that leverages the Google Agent Development Kit (ADK), Firebase, and Google GenAI SDK.
3. **`.agent/` & `_bmad/`**: Local AI agent rules, workflows, and skills used to enforce project standards and development velocity.

---

## 🛠️ Fresh Environment Setup Guide

When initializing this project in a new workspace or IDE, execute the following steps in order:

### 1. Environment Variables & Authentication

You must create an `auth_keys` directory in the root to store sensitive credentials. **Do not commit these files to version control.**

```bash
mkdir auth_keys
cp .env.example auth_keys/.env
```

**Required Keys Example (`auth_keys/.env`):**
```env
# ============================================================================
# B&L WorldWide — Environment Configuration
# ============================================================================

# Google AI / Gemini API (Get from: https://aistudio.google.com/app/apikey)
GEMINI_API_KEY=your_gemini_api_key_here

# Google Cloud Platform (GCP)
GCP_PROJECT_ID=your-gcp-project-id

# Path to your Firebase/GCP service account JSON file
GOOGLE_APPLICATION_CREDENTIALS=auth_keys/service-account.json

# Optional: Vertex AI Search Data Stores
# VERTEX_SEARCH_DB1_ID=your-datastore-id
# VERTEX_SEARCH_LOCATION=global

# Development & Debugging
DEBUG=false
LOG_LEVEL=INFO
FASTAPI_RELOAD=true

# Frontend API routing
VITE_API_URL=http://localhost:8000
```
*Note: Make sure the human developer places their valid `service-account.json` into the `auth_keys/` folder as well.*

### 2. Backend Setup (Python)

The backend relies on Python, FastAPI, and Google ADK.

```bash
# Create and activate a virtual environment
python -m venv .venv

# Windows activation:
.venv\Scripts\activate
# Mac/Linux activation:
# source .venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt
```

### 3. Frontend Setup (React + Vite)

The frontend uses Node.js and npm.

```bash
cd website
npm install
```

---

## 🚀 Running the Application Locally

For local development, both servers need to be started:

**Start Backend (from root directory):**
```bash
# Assuming virtual environment is activated
uvicorn backend.main:app --reload --port 8000
```
*(Alternatively, use the built-in BMAD agent slash command: `/1_run-restart-dev-env` if applicable).*

**Start Frontend (from `website/` directory):**
```bash
cd website
npm run dev
```

---

## 🤖 Agent Workflow Reminders

1. **Rule Verification**: Before making codebase changes, check the `.agent/rules/` directory for any architectural invariants or formatting mandates.
2. **Context Discovery**: Always refer to `_bmad-output/planning-artifacts/prd.md` or `architecture.md` to understand the functional goals of the current sprint.
3. **Artifact Generation**: When generating multi-section reports or architectural designs, write them out to Markdown files in the artifacts directory—never dump raw walls of text in the chat.
4. **Visual Containment**: Strictly adhere to the separation of concerns: Backend logic belongs in `/backend`, and UI components belong in `/website/src/components`.

---
*If you encounter any start-up issues, instruct the human developer to verify the GCP/Firebase IAM permissions inside the `service-account.json`.*
