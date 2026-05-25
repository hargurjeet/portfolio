# Project Context: Hargurjeet's Next.js Portfolio

This document provides a comprehensive overview of the `portfolio-nextjs` codebase, architecture, and technology stack. It serves as a persistent context guide for the Antigravity AI coding assistant to quickly understand the project landscape.

---

## 🚀 Project Overview
* **Target Audience**: Recruiters, hiring managers, and AI/Data Science team leads.
* **Goal**: Showcase Hargurjeet Singh Ganger's 15+ years of experience in IT, specializing in Data Science, Machine Learning, and Generative AI (LLMs, RAG, Agentic workflows).
* **Core Design**: Sleek dark/light theme, modern typography (Inter/Outfit), smooth micro-animations (Framer Motion), scroll-driven timeline effects, and an interactive Fireworks-powered GenAI Chat Widget.

---

## 🛠️ Technology Stack
* **Framework**: Next.js v16.2.5 (App Router configuration)
* **Frontend Library**: React v19.2.4
* **Styling**: TailwindCSS v4 with PostCSS
* **Icons**: Lucide React + custom inline SVG icons (LinkedIn, GitHub)
* **Animations**: Framer Motion v12.38.0
* **API Completions Stream**: Fireworks AI API (`accounts/fireworks/models/kimi-k2p5`)

---

## 📁 Key Directories & File Roles

### 1. Root Layout & Configuration
* [package.json](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/package.json): Defines Next.js, React, Tailwind, and Framer Motion dependencies.
* [app/layout.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/app/layout.tsx): Top-level layout. Sets up fonts, HTML semantics, global layout wrapper, and standard SEO headers.
* [app/globals.css](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/app/globals.css): Declares TailwindCSS imports and basic utility variables.

### 2. Main Page Sections (`app/page.tsx` renders in this storytelling order)
* [Navbar.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Navbar.tsx): Responsive navigation header with section links and light/dark theme toggle support.
* [Hero.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Hero.tsx): Top section introducing Hargurjeet as a Senior Data Scientist/GenAI Engineer. Features a vertical editorial stack of roles with high-tracking mono font, flanked by a vertical gradient accent strip, alongside a glowing 2x2 Impact Snapshot dashboard grid. *Note: Availability pill has been deprecated and rotating titles converted to a static vertical column per user requirements.*
* [WhatISolve.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/WhatISolve.tsx): High-impact visual grid outlining the key GenAI and ML problems Hargurjeet solves (BM25 + vector RAG, CrewAI multi-agent flows, MLOps scaling).
* [About.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/About.tsx): Chronological biography capturing the transition from foundational POS testing (TCS) to predictive maintenance modeling (Shell) to enterprise Generative AI engineering (BT).
* [Experience.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Experience.tsx): Scroll-driven, interactive vertical timeline illustrating key accomplishments at BT, Royal Dutch Shell, and TCS.
* [Projects.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Projects.tsx): In-depth case studies with outcome callouts (RAG evaluation, Pydantic resume parser, database MCP server).
* [Skills.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Skills.tsx): Grid of grouped technical badges serving as a technical checklist for recruiters.
* [ImpactStats.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/ImpactStats.tsx): Consolidated trust stats (15+ Years, $10M+ Generated, 7+ Systems) positioned just before the contact CTA.
* [Education.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Education.tsx): Academic verification timeline (LJMU MS in ML & AI, IIIT Bangalore PG, BE).
* [Contact.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/Contact.tsx): Elegant footer contact form/email links.

### 3. AI Chat Widget
* [ChatWidget.tsx](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/components/ChatWidget.tsx): Sticky floating chat bubble. Features preset suggestion buttons, scroll-to-bottom mechanics, message history mapping, and a streaming response UI.
* [route.ts](file:///Users/hargurjeetsinghganger/programming_local/portfolio-nextjs/portfolio/app/api/chat/route.ts): Streaming `/api/chat` router. It feeds the recruiter knowledge base to Fireworks' Kimi model and sanitizes output by stripping out `<think>...</think>` tokens generated during upstream reasoning.

---

## 🎨 UX Redesign Core Objectives
1. **Uncompromising Mobile Compatibility**: Establish responsive grid behaviors (`grid-cols-1 md:grid-cols-2`), touch targets >= 44px, scaling margins and paddings, and fluid font-size adjustments.
2. **Elevated Storytelling**: Reinforce a continuous, story-driven flow showing the growth from foundational IT systems testing in the UK to pioneering advanced Generative AI and RAG architectures in London.
3. **Pill Deprecation**: Remove all instances of `"Available for new opportunities"` to align with a sleek, senior principal positioning.
4. **Premium Typography (Pack A)**: Configured **`Outfit`** globally as the font-heading for headers (`h1-h6`), retaining **`Geist Sans`** for body copy and **`Geist Mono`** for technical spec tags, delivering an elite, geometric tech-editorial aesthetic.
5. **Tactile Matte Background (Texture 1)**: Integrated a global, fixed, micro-fine SVG fractal noise overlay on the body (`opacity: 0.025`, `mix-blend-mode: overlay`), creating a tactile, paper-like surface that eliminates digital glare and softens color gradients.

---

## 💻 Standard Development Commands
* **Run Local Dev Server**: `npm run dev`
* **Production Build**: `npm run build`
* **Start Built Server**: `npm run start`
