# ai-dev-template-copilot

### 🧠 Phase 1: Idea-to-Product Flow

Scaffold the flow and use the agent to produce the personas and their prompts

```mermaid
graph TD
    A[User Initiates Idea] --> B[Visionary Agent: Draft PRD]
    B --> C[User Clarifies and Finalizes PRD]
    C --> D[Architect Agent: Create FRDs]
    D --> E[User Reviews Features]
    E --> F[Behavior Agent: Write Gherkin Scenarios]
    F --> G[User Validates Scenarios]
    G --> H[Guardian Agent: Generate Tests]
    H --> I[User Adds Edge Cases]
    I --> J[Builder Agent: Implement Code]
    J --> K[User Shares Preferences]
    K --> L[Refiner Agent: Run Tests and Fix Issues]
    L --> M[User Decides on Fixes]
    M --> N[Scribe Agent: Generate Documentation]
    N --> O[User Reviews Docs]
```

---

### 🚀 Phase 2: Dev Team Flow with GitHub Integration

This phase shows how the team uses a preconfigured GitHub template to kickstart development:

```mermaid
graph TD
    P[Start with GitHub Template Repo: Elderly AI Assistant] --> Q[Vision Agent: Create PRD]
    Q --> R[Architect Agent: Break into FRDs]
    R --> S[Behavior Agent: Generate Gherkin Features]
    S --> T[Guardian Agent: Create Automated Tests]
    T --> U[GH Agent: Create Dev Plan and Issues]
    U --> V[GH Copilot Coding Agent: Implement Code]
```