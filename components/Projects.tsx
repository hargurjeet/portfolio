"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Sparkles, BarChart3, Database, FileText, Layers, X, Award, FolderTree } from "lucide-react";

type GlowColor = "indigo" | "amber" | "emerald" | "cyan" | "rose";

interface Project {
  title: string;
  category: string;
  icon: string;
  glowColor: GlowColor;
  description: string[];
  outcome: string;
  tags: string[];
  badge: string;
  githubUrl?: string;
  liveUrl?: string;
  liveLabel?: string;
}

const projects: Project[] = [
  {
    title: "Antigravity: Autonomous UI Designer",
    category: "AI Agents",
    icon: "sparkles",
    glowColor: "indigo",
    description: [
      "**Closed-Loop Critic**: Triggers autonomous redraw cycles by validating generated **mockup images** against guidelines.",
      "**Evaluator Scoring**: Computes quantitative metrics for **brand consistency**, **color alignment**, and **layout accuracy** to score each generation attempt.",
      "**State & Memory**: Manages agent context and state retention across iterations using a central memory store to refine subsequent **image generation**.",
      "**Robust Guardrails**: Enforces strict boundaries via **JSON schema validation**, retry loops, and **degrade-gracefully fallbacks** via **pre-trial groups**.",
      "**Streaming Timeline**: Traces and displays the **agentic step-by-step cognitive thoughts and evaluations** alongside intermediate drawing cycles.",
      "**Google Agentic Systems**: Orchestrates **multimodal Gemini 2.5** and **Imagen 4 Ultra** models to analyze briefs, map brand DNA, and generate high-fidelity **images**.",
    ],
    outcome:
      "A state-of-the-art design workspace demonstrating expert command over **multimodal image data** through self-correcting agentic loops.",
    tags: ["Gemini 2.5", "Imagen 4", "Google Agentic Systems", "Critique Loop", "Memory Management", "Real-Time Streaming", "Next.js 16", "Tailwind CSS v4"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/image-generator-nextjs",
    liveUrl: "https://antigravity-studio-blush.vercel.app/Antigravitystudio",
    liveLabel: "Launch App",
  },
  {
    title: "Local Multi-Agent Folder Organizer",
    category: "AI Agents",
    icon: "folder-tree",
    glowColor: "indigo",
    description: [
      "**Hierarchical Coordinator-Specialist Architecture**: Configures a lead orchestrator agent that partitions folder listings into subtask categories, preventing context window limits.",
      "**Multi-Agent Concurrency**: Spawns category-specific specialist subagents in parallel using a Python `ThreadPoolExecutor` to slash local Ollama inference latency by **60%**.",
      "**Pydantic Output Validation**: Enforces strict JSON schemas on local SLMs using CrewAI's output parsing, guaranteeing zero formatting errors.",
      "**Human-in-the-Loop Safe Gate**: Implements a CLI preview table and user confirmation prompt before mutating any folder structure, supporting a non-destructive dry-run mode.",
      "**Transactional Rollback Log**: Records all file migrations atomically in a central `history.json` transaction log, facilitating instant programmatic recovery.",
    ],
    outcome:
      "A local-first system running fully on-device via Ollama that restructures cluttered downloads folders into semantic, context-aware nested subdirectories.",
    tags: ["CrewAI", "Ollama", "Llama 3.2", "Pydantic", "Python", "Local LLMs", "Systems Automation"],
    badge: "Open Source",
    githubUrl: "https://github.com/hargurjeet/local_agent_organizer",
  },
  {
    title: "Local AI Assistant & SLM Benchmarking",
    category: "AI & Benchmarks",
    icon: "bar-chart",
    glowColor: "amber",
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
    liveLabel: "Launch Article",
  },
  {
    title: "Generic Database MCP Server",
    category: "MCP & Developer Tools",
    icon: "database",
    glowColor: "emerald",
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
  },
  {
    title: "AI-Powered Resume Parser",
    category: "AI Applications",
    icon: "file-text",
    glowColor: "cyan",
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
    liveLabel: "Launch App",
  },
  {
    title: "Production-Grade RAG Evaluation Pipeline",
    category: "RAG & LLMOps",
    icon: "network",
    glowColor: "rose",
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
    liveLabel: "Launch Space",
  },
];

interface ColorTheme {
  bg: string;
  glow: string;
  iconBg: string;
  outcome: string;
  accent: string;
  badge: string;
  bullet: string;
}

const colorMap: Record<GlowColor, ColorTheme> = {
  indigo: {
    bg: "bg-indigo-500/8 hover:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    glow: "shadow-[0_0_35px_-5px_rgba(99,102,241,0.06)] hover:shadow-[0_0_40px_-5px_rgba(99,102,241,0.22)] hover:border-indigo-500/40",
    iconBg: "from-indigo-500/25 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25",
    outcome: "bg-indigo-500/5 dark:bg-indigo-950/20 border border-indigo-500/20 border-l-4 border-l-indigo-500 text-indigo-700 dark:text-indigo-300",
    accent: "text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    bullet: "bg-indigo-500 dark:bg-indigo-400",
  },
  amber: {
    bg: "bg-amber-500/8 hover:bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/20",
    glow: "shadow-[0_0_35px_-5px_rgba(245,158,11,0.06)] hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.22)] hover:border-amber-500/40",
    iconBg: "from-amber-500/25 to-orange-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25",
    outcome: "bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 border-l-4 border-l-amber-500 text-amber-700 dark:text-amber-300",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    bullet: "bg-amber-500 dark:bg-amber-400",
  },
  emerald: {
    bg: "bg-emerald-500/8 hover:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    glow: "shadow-[0_0_35px_-5px_rgba(16,185,129,0.06)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.22)] hover:border-emerald-500/40",
    iconBg: "from-emerald-500/25 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25",
    outcome: "bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 border-l-4 border-l-emerald-500 text-emerald-700 dark:text-emerald-300",
    accent: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    bullet: "bg-emerald-500 dark:bg-emerald-400",
  },
  cyan: {
    bg: "bg-cyan-500/8 hover:bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    glow: "shadow-[0_0_35px_-5px_rgba(6,182,212,0.06)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.22)] hover:border-cyan-500/40",
    iconBg: "from-cyan-500/25 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25",
    outcome: "bg-cyan-500/5 dark:bg-cyan-950/20 border border-cyan-500/20 border-l-4 border-l-cyan-500 text-cyan-700 dark:text-cyan-300",
    accent: "text-cyan-600 dark:text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    bullet: "bg-cyan-500 dark:bg-cyan-400",
  },
  rose: {
    bg: "bg-rose-500/8 hover:bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/20",
    glow: "shadow-[0_0_35px_-5px_rgba(244,63,94,0.06)] hover:shadow-[0_0_40px_-5px_rgba(244,63,94,0.22)] hover:border-rose-500/40",
    iconBg: "from-rose-500/25 to-pink-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/25",
    outcome: "bg-rose-500/5 dark:bg-rose-950/20 border border-rose-500/20 border-l-4 border-l-rose-500 text-rose-700 dark:text-rose-300",
    accent: "text-rose-600 dark:text-rose-400",
    badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    bullet: "bg-rose-500 dark:bg-rose-400",
  },
};

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "sparkles":
      return <Sparkles className={className} size={18} />;
    case "bar-chart":
      return <BarChart3 className={className} size={18} />;
    case "database":
      return <Database className={className} size={18} />;
    case "file-text":
      return <FileText className={className} size={18} />;
    case "network":
      return <Layers className={className} size={18} />;
    case "folder-tree":
      return <FolderTree className={className} size={18} />;
    default:
      return <Sparkles className={className} size={18} />;
  }
};

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="text-foreground font-semibold font-sans">{part}</strong>
      : part
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const categories = ["All", "AI Agents", "AI Applications", "MCP & Developer Tools", "RAG & LLMOps", "AI & Benchmarks"];

  // Filter project arrays dynamically
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-secondary relative overflow-hidden">
      {/* Premium ambient decorative lights */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-indigo-500/3 dark:bg-indigo-500/2 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/3 dark:bg-cyan-500/2 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-sm backdrop-blur-sm">
            <Sparkles size={12} className="animate-pulse" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A carefully curated selection of deep-dive AI engineering projects, spanning autonomous agents, production RAG pipelines, and local SLM benchmarks.
          </p>
        </motion.div>

        {/* Dynamic Category Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedTag(null); // Reset tag filter on category change
                }}
                className={`relative px-4 py-2.5 text-xs md:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-primary-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50 border border-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {category}
              </button>
            );
          })}
        </div>

        {/* Active Tag Banner */}
        <AnimatePresence>
          {selectedTag && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <div className="bg-primary/8 border border-primary/20 rounded-full px-4 py-2 flex items-center gap-2.5 text-xs md:text-sm shadow-sm backdrop-blur-sm">
                <span className="text-muted-foreground">Filtering by tag:</span>
                <span className="font-semibold text-primary">{selectedTag}</span>
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-muted-foreground hover:text-foreground rounded-full p-0.5 hover:bg-muted-foreground/15 transition-all ml-1 cursor-pointer"
                  title="Clear tag filter"
                >
                  <X size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid Container with layout animations */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-6 lg:gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const theme = colorMap[project.glowColor] || colorMap.indigo;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`bg-card/70 dark:bg-card/50 backdrop-blur-md border border-border/80 rounded-2xl p-6 lg:p-8 flex flex-col hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden ${theme.glow}`}
                >
                  {/* Category Accent Stripe on Card Top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Card Header Row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${theme.iconBg}`}>
                        <IconComponent name={project.icon} className="shrink-0" />
                      </div>
                      <div>
                        <span className={`text-2xs font-mono tracking-widest uppercase font-semibold ${theme.accent}`}>
                          {project.category}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-foreground leading-tight mt-0.5 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      {project.badge === "Open Source" ? (
                        project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xs px-2.5 py-1 rounded-full font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${theme.badge}`}
                            title="Open GitHub Repository"
                          >
                            {project.badge}
                          </a>
                        ) : (
                          <span className={`text-2xs px-2.5 py-1 rounded-full font-semibold border ${theme.badge}`}>
                            {project.badge}
                          </span>
                        )
                      ) : (
                        project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xs px-2.5 py-1 rounded-full font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${theme.badge}`}
                            title={project.liveLabel ? `Open ${project.liveLabel}` : "Open Live Application"}
                          >
                            {project.badge}
                          </a>
                        ) : (
                          <span className={`text-2xs px-2.5 py-1 rounded-full font-semibold border ${theme.badge}`}>
                            {project.badge}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Bullet Contributions */}
                  <ul className="text-muted-foreground text-xs md:text-sm mb-6 flex-1 space-y-2.5">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start leading-relaxed">
                        <span className={`shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${theme.bullet}`} />
                        <span>{parseBold(point)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Redesigned Outcome callout box */}
                  <div className={`rounded-xl p-4 mb-6 leading-relaxed text-xs md:text-sm transition-all duration-300 ${theme.outcome}`}>
                    <div className="flex items-start gap-2.5">
                      <Award size={16} className={`shrink-0 mt-0.5 ${theme.accent}`} />
                      <div>
                        <span className="font-bold text-foreground">Outcome: </span>
                        {parseBold(project.outcome)}
                      </div>
                    </div>
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => {
                      const isFiltered = selectedTag === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(isFiltered ? null : tag)}
                          className={`text-2xs px-2.5 py-1 rounded-md border transition-all duration-200 cursor-pointer ${
                            isFiltered
                              ? "bg-primary text-primary-foreground border-primary font-semibold shadow-sm scale-105"
                              : "bg-secondary/60 dark:bg-muted/40 text-muted-foreground border-border/80 hover:border-primary/30 hover:text-foreground hover:bg-card"
                          }`}
                          title={`Click to filter by ${tag}`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Search/Filter results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-card/20 border border-dashed border-border rounded-2xl"
            >
              <Award size={40} className="text-muted-foreground/30 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">No Projects Found</h3>
              <p className="text-sm text-muted-foreground max-w-sm mb-5">
                There are no projects matching both the selected category and active tag filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTag(null);
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 shadow-sm"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
