# Agent Coding & Behavior Rules: Hargurjeet's Next.js Portfolio

This document outlines the coding style, standards, and behavioral guidelines to maintain while modifying this repository.

---

## 🎨 Design & Code Standards

### 1. **Strict Mobile Compatibility Protocol**
* **Fluid Layouts**: Grids must transition to a single column on medium (`md`) and small (`sm`) viewports.
* **Touch-Friendly Targets**: All interactive elements (buttons, links, toggle switches, tabs) must have a minimum touch target size of 44x44px.
* **Responsive Typography**: Header text size must scale down cleanly on mobile (e.g., changing from `text-5xl` or `text-7xl` on desktop to `text-3xl` or `text-4xl` on mobile) to avoid overflow or awkward word wrapping.
* **Horizontal Scroll Containment**: No element should cause horizontal scrolling on mobile viewports. Container padding (`px-4` or `px-6`) must be applied carefully.
* **Floating Bottom Navigation**: Highly recommend collapsible burger menus or bottom navigation sheets for thumb-friendly mobile interaction.

### 2. **Storytelling & Narrative Construction**
* **Stitched Story Flow**: The website sections must build a continuous chronological and logical narrative showing Hargurjeet's professional transformation:
  1. **The Origin & Engineering Foundations** (TCS system testing & UK offline leadership).
  2. **The Analytical Shift** (Shell predictive modeling, saving budget and cost).
  3. **The AI Frontier & Enterprise Scale** (BT RAG architectures, Agentic guardrails, and production MLOps).
* **Copywriting**: Technical terms should be supported by business impact (e.g. *what was solved* + *why it mattered to the organization*).

### 3. **UI Layout Rules**
* **Omit Opportunity Pills**: The text `"Available for new opportunities"` is officially deprecated and must be removed from the Hero or any other component.
* **Contrast & Glassmorphism**: Maintain strong dark mode contrast ratios (minimum 4.5:1 for body copy). Use subtle borders (`border-border/50`) and translucent backdrops (`bg-card/75 backdrop-blur-md`) to ensure modern premium look.

---

## 🤖 Antigravity Agent Guidelines

* **Maintain Documentation Integrity**: Preserve existing comments, docstrings, and context-markers unless specifically instructed to clean them up.
* **Keep Knowledge Base Synchronized**: If any career timeline, key metric, project links, or skill sets are updated in components like `Hero.tsx` or `Projects.tsx`, update the inline `KNOWLEDGE_BASE` constant in [route.ts](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/app/api/chat/route.ts) immediately to keep the AI chatbot perfectly in sync.
* **Zero-Placeholders Rule**: Never check in placeholder text or images. If assets are needed, ask the user or use the generative capabilities of the workspace to create them.

---

## 🧪 Verification & Deployment Checks

* Always verify changes locally before committing:
  ```bash
  npm run build
  ```
* Test vector chat responses locally by ensuring your `.env.local` is active and the `/api/chat` route compiles with zero typescript warnings.
