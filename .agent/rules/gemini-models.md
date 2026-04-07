---
description: Enforce Gemini 3.0 model usage for agents
activation: always
---

# Gemini Model Standards

Always use the latest Gemini 3.0 models for all agent implementations in this project.

## Required Models

### Talker/Router Agents
- **Model:** `gemini-3-flash-preview`
- **Use case:** Quick responses, routing decisions, conversational interactions
- **Examples:**
  - Conversational Agent Talker
  - Router / Dispatcher Agent
  - Acknowledgment / Streaming Agent

### Reasoner Agents
- **Model:** `gemini-3-pro-preview`
- **Use case:** Complex reasoning, detailed analysis, technical explanations
- **Examples:**
  - Fact-checking / Verification Agent
  - Deep Reasoning Agent
  - Grading / Scoring Agent

## Implementation Guidelines

### Model Configuration
When configuring agent models in code:
```python
# For Talker agents
talker_model = genai.GenerativeModel(
    model_name="gemini-3-flash-preview",
    system_instruction=TALKER_INSTRUCTION
)

# For Reasoner agents
reasoner_model = genai.GenerativeModel(
    model_name="gemini-3-pro-preview",
    system_instruction=REASONER_INSTRUCTION
)
```

### Key Files to Check
- Agent files in `backend/agents/*/agent.py`
- Service files that instantiate models

## Reference Materials

Always check the `_bmad-output/planning-artifacts/` folder for:
- Product Requirements Documents (PRDs)
- Architecture documents
- Agent persona specifications

## Verification

When reviewing or modifying agent code:
1. Verify the model name matches the required version
2. Check that system instructions are properly defined
3. Ensure the model is appropriate for the agent's role (Talker vs Reasoner)
4. Test that responses meet quality expectations for the model tier
