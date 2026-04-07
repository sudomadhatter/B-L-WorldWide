---
description: Diff the clean-bmad-workspace against aviationChat-AGY and sync all .agent/ config (rules, workflows, skills) to match — excluding project-specific content.
---

# Sync Workspace with AviationChat (`/update_workflow_aviationchat_match`)

This workflow compares the clean-bmad-workspace to aviationChat-AGY and pulls in any improvements, new rules, new workflows, or skill updates — while keeping the workspace project-agnostic.

> **The source of truth is:** `c:\AGY-Projects\aviationChat-AGY\.agent\`
> **The target is:** `c:\AGY-Projects\clean-bmad-workspace\.agent\`

---

## Step 1: Audit Rules — Find Differences
// turbo
Compare all rule files in both workspaces:
1. List all files in `c:\AGY-Projects\aviationChat-AGY\.agent\rules\`
2. List all files in `c:\AGY-Projects\clean-bmad-workspace\.agent\rules\`
3. Identify files that are:
   - **Missing** from the clean workspace (need to be copied)
   - **Present in both** (need content diff — has AviationChat version been updated?)

Output a table:
```
| Rule File | Status | Action Required |
| ... | Missing / Outdated / In Sync | Copy / Update / None |
```

## Step 2: Audit Workflows — Find Differences
// turbo
Compare all workflow files in both workspaces:
1. List all files in `c:\AGY-Projects\aviationChat-AGY\.agent\workflows\`
2. List all files in `c:\AGY-Projects\clean-bmad-workspace\.agent\workflows\`
3. Identify files that are:
   - **Missing** from the clean workspace
   - **Present in both but content differs** (aviation has been updated since last sync)

Output a table the same way as Step 1.

## Step 3: Audit Skills — Find Differences
// turbo
Compare skill directories:
1. List all directories in `c:\AGY-Projects\aviationChat-AGY\.agent\skills\`
2. List all directories in `c:\AGY-Projects\clean-bmad-workspace\.agent\skills\`
3. Identify:
   - General/reusable skills present in aviation but missing from clean workspace
   - Skip aviation-specific skills (e.g. anything mentioning FAA, aviation, airman, ACS, RAG pipelines specific to flight training)

Output a final summary list of skills to add.

## Step 4: Sync — Copy & Generalize Rules
// turbo
For each **Missing** or **Outdated** rule file identified in Step 1:
1. Read the source file from `c:\AGY-Projects\aviationChat-AGY\.agent\rules\`
2. Generalize any AviationChat-specific references using these replacements:
   - `aviationChat-AGY` → `{{PROJECT_NAME}}`
   - `aviationchat` → `{{PROJECT_NAME}}`
   - `AviationChat` → `{{PROJECT_NAME}}`
   - `aviationchat-database` → `(default)`
   - `FAA` / `ACS` / `airman` → remove or replace with generic language
3. Write the generalized content to `c:\AGY-Projects\clean-bmad-workspace\.agent\rules\`

## Step 5: Sync — Copy & Generalize Workflows
// turbo
For each **Missing** or **Outdated** workflow file identified in Step 2:
1. Read the source file from `c:\AGY-Projects\aviationChat-AGY\.agent\workflows\`
2. Apply the same generalization replacements as Step 4.
3. Write the generalized content to `c:\AGY-Projects\clean-bmad-workspace\.agent\workflows\`

**Do NOT overwrite these clean-workspace-specific workflows (they are intentionally diverged):**
- `1_ccps_update-active-context.md` (autonomous version — newer than aviation's)
- `update_workflow_aviationchat_match.md` (this workflow itself)

## Step 6: Sync — Add Missing Skills
// turbo
For each reusable skill identified in Step 3 that is missing from clean workspace:
1. Copy the entire skill directory from `c:\AGY-Projects\aviationChat-AGY\.agent\skills\[skill-name]\` to `c:\AGY-Projects\clean-bmad-workspace\.agent\skills\[skill-name]\`
2. Generalize any internal SKILL.md content using the same replacements as Step 4.

## Step 7: Update the Docs Registry
// turbo
After all syncs are complete:
1. Read `c:\AGY-Projects\clean-bmad-workspace\docs\skills-registry.md`
2. Add any newly synced skills that are not already listed.
3. Update `c:\AGY-Projects\clean-bmad-workspace\_01_My\Docs\BMAD_CCPS_workspace_guide.md`:
   - Update the Rules Inventory table in Section 5 to reflect any new rules added.
   - Update the Workflows Inventory table if any new workflows were added.

## Step 8: Final Report
// turbo
Show a complete itemized receipt of everything that was done:

```
### ✅ Sync Complete — AviationChat → Clean Workspace

**Rules:**
- [Copied / Updated / Skipped] rule-name.md — reason

**Workflows:**
- [Copied / Updated / Protected / Skipped] workflow-name.md — reason

**Skills:**
- [Copied / Skipped] skill-name — reason

**Docs Updated:**
- skills-registry.md: [N] new entries added
- BMAD_CCPS_workspace_guide.md: [Updated / No change needed]
```

Then ask:
> "Sync complete. Does everything look right, or do you want me to revert or adjust anything?"
