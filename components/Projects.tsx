"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

const projects = [
  {
    title: "Antigravity Studio: Autonomous Self-Correcting UI Designer",
    description: [
      "**Multi-Agent Cognitive Workflows**: Architected an autonomous pipeline powered by **Gemini 2.5** and **Imagen 4 Ultra** that sequentially dissects briefs, maps brand DNA, and designs visual mockups.",
      "**Closed-Loop Critic & Self-Correction**: Implemented a **critique system** where an evaluator agent scores each mockup attempt against original guidelines, sending structured feedback to trigger autonomous redraws.",
      "**State & Memory Management**: Managed agent context retention and state persistence across iterations using a central memory store to refine subsequent drawing attempts based on critic feedback.",
      "**Execution Guardrails & Robustness**: Engineered strict execution boundaries with JSON schema enforcement, retry loops, and degrade-gracefully fallbacks to prevent infinite loops and agent divergence.",
      "**Real-Time SSE Storytelling**: Built a high-fidelity stream that leverages **Server-Sent Events (SSE)** to trace and display the AI agent's step-by-step cognitive thoughts, evaluations, and drawing cycles in real-time.",
    ],
    outcome:
      "A state-of-the-art autonomous design system that shifts the paradigm from simple text-to-image prompts to self-correcting agentic loops, ensuring high brand alignment through closed-loop critique.",
    tags: ["Gemini 2.5", "Imagen 4", "Agentic Workflows", "Critique Loop", "Memory Management", "Server-Sent Events (SSE)", "Next.js 16", "Tailwind CSS v4"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/image-generator-nextjs",
    liveUrl: "https://hargurjeet.dev/Antigravitystudio",
  },
  {
    title: "AI-Powered Resume Parser",
    description: [
      "PDF → structured JSON pipeline: pdfplumber extracts text → **Llama 3.3 70B** parses via Fireworks AI",
      "**JSON schema enforcement**: instructor library constrains LLM output to an exact **Pydantic v2** model",
      "**Retry mechanism**: catches invalid outputs, re-prompts the LLM once, then fails gracefully — no silent errors",
      "Split-view UI: original PDF alongside **experience timeline**, color-coded skill tags, and education cards",
      "One-click JSON export, dark/light mode, drag-and-drop upload with animated progress steps",
    ],
    outcome:
      "Live on Fly.io. **Structured output guaranteed at the schema level** — retry logic and graceful failure handle the edge cases that plain prompting misses.",
    tags: ["FastAPI", "Next.js", "Llama 3.3 70B", "Fireworks AI", "pdfplumber", "Pydantic", "Fly.io"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/resume-parser",
    liveUrl: "https://hargurjeet-resume-ui.fly.dev",
  },
  {
    title: "Local AI Assistant & SLM Benchmarking",
    description: [
      "**Local SLM evaluation**: Developed a **FastAPI** testing harness benchmarking **Llama 3.2 (3B)**, **Phi-3 Mini (3.8B)**, and **Mistral (7B)** fully on-device via **Ollama**.",
      "**Inference speed profiling**: Measured raw performance where **Phi-3 Mini** led at **22.70 tokens/sec** (**323.99ms TTFT**), followed closely by **Llama 3.2** at **22.24 tokens/sec** (**427.29ms TTFT**).",
      "**Pydantic schema enforcement**: Structured LLM outputs using validation schemas. **Llama 3.2** achieved **100% compliance** via retry reprompts, while **Mistral 7B** achieved **90% compliance** zero-shot.",
      "**Resource allocation tracking**: Measured memory-bound constraints on Apple Silicon **Mac mini (16GB RAM)** where CPU load remained low (**13–15%**) but loaded memory hit **88.8% to 94.4% of RAM**.",
    ],
    outcome:
      "Rigorous local benchmark of 30 multi-domain prompts published on **Dev.to** and **GitHub**. Proved that **Llama 3.2 (3B)** is the most reliable for structured JSON pipelines, while **Phi-3 Mini** excels in speed and latency.",
    tags: ["Ollama", "FastAPI", "Llama 3.2", "Mistral 7B", "Phi-3", "Pydantic", "Python", "Apple Silicon"],
    badge: "Open Source",
    githubUrl: "https://github.com/hargurjeet/local_slm_experiments",
    liveUrl: "https://dev.to/gurjeet333/running-llms-locally-a-rigorous-benchmark-of-phi-3-mistral-and-llama-32-on-ollama-2289",
  },
  {
    title: "Generic Database MCP Server",
    description: [
      "**Zero hardcoding** — connects to any DuckDB file and auto-discovers every table and column at runtime",
      "**Type-aware quality checks**: numeric columns get distribution stats + Z-score; VARCHAR gets cardinality; TIMESTAMP gets gap detection",
      "**Ollama ReAct loop** (llama3.2) iteratively calls MCP tools, drills into anomalies, and writes a plain-English RCA report",
      "**FastAPI REST layer** exposes drag-and-drop file upload, per-table quality checks, and RCA generation as HTTP endpoints",
      "**Next.js dashboard** visualises schema, null rates, distribution cards, and cardinality in a 3-step upload → inspect → report flow",
    ],
    outcome:
      "Pass any DuckDB file and get a full data-quality report + LLM-written root cause analysis in seconds — no config, no hardcoded schema.",
    tags: ["FastMCP", "DuckDB", "Ollama", "llama3.2", "FastAPI", "Next.js", "Recharts", "Python"],
    badge: "Open Source",
    githubUrl: "https://github.com/hargurjeet/database-mcp",
    liveUrl: "https://github.com/hargurjeet/database-mcp",
  },
  {
    title: "Production-Grade RAG Evaluation Pipeline",
    description: [
      "**Hybrid retrieval** — BM25 sparse + contextual dense search — fed through a **Cohere reranker**",
      "**Citation enforcement** grounds every answer in source documents; no hallucinated references",
      "Prompts **version-controlled** in a config file — every change is tracked and reproducible",
      "Offline **RAGAS** script measures faithfulness, answer relevancy, and context precision",
      "**GitHub Actions gate** runs eval on every PR; merge blocked if any metric drops below threshold",
    ],
    outcome:
      "Quality regressions caught at PR stage, not in production. Stack: LangChain/LangGraph, Chroma vector store, Cohere reranker — every retrieval step traceable, every prompt change auditable.",
    tags: ["RAG", "RAGAS", "BM25", "LangChain", "LangGraph", "Cohere Reranker", "Chroma", "GitHub Actions", "Python"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/hybrid-rag",
    liveUrl: "https://huggingface.co/spaces/Hargurjeet/hybrid-rag-nextjs",
  },
];

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="text-foreground font-semibold">{part}</strong>
      : part
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 flex flex-col hover:border-primary/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-primary/10 border border-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                  {project.badge}
                </span>
                <div className="flex gap-3 text-muted-foreground/40">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    <GitHubIcon size={18} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <ul className="text-muted-foreground text-sm mb-4 flex-1 space-y-1.5">
                {project.description.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary shrink-0 mt-0.5">›</span>
                    <span className="leading-relaxed">{parseBold(point)}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 border border-primary/15 rounded-lg p-3 mb-4">
                <p className="text-primary text-xs leading-relaxed">
                  <span className="font-semibold">Outcome: </span>
                  {parseBold(project.outcome)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary dark:bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
