"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

const projects = [
  {
    title: "Production-Grade RAG Evaluation Pipeline",
    description: [
      "Hybrid retrieval — BM25 sparse + contextual dense search — fed through a Cohere reranker",
      "Citation enforcement grounds every answer in source documents",
      "Prompts version-controlled in a config file for full reproducibility",
      "Offline RAGAS script measures faithfulness, answer relevancy, and context precision",
      "GitHub Actions gate runs eval on every PR; merge blocked if any metric drops below threshold",
    ],
    outcome:
      "Quality regressions caught at PR stage, not in production. Stack: LangChain/LangGraph, Chroma vector store, Cohere reranker — every retrieval step traceable, every prompt change auditable.",
    tags: ["RAG", "RAGAS", "BM25", "LangChain", "LangGraph", "Cohere Reranker", "Chroma", "GitHub Actions", "Python"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/hybrid-rag",
    liveUrl: "https://huggingface.co/spaces/Hargurjeet/hybrid-rag-nextjs",
  },
  {
    title: "AI-Powered Resume Parser",
    description: [
      "Drag-and-drop PDF upload → pdfplumber extracts text → Llama 3.3 70B parses into structured JSON",
      "Split-view UI: original PDF alongside parsed experience timeline, color-coded skills, and education cards",
      "Pydantic v2 + instructor enforce structured output — API never returns malformed JSON",
      "One-click JSON export, dark/light mode toggle, animated progress steps",
    ],
    outcome:
      "Live on Fly.io. Structured output guaranteed at the schema level — zero post-processing hacks needed.",
    tags: ["FastAPI", "Next.js", "Llama 3.3 70B", "Fireworks AI", "pdfplumber", "Pydantic", "Fly.io"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/resume-parser",
    liveUrl: "https://hargurjeet-resume-ui.fly.dev",
  },
  {
    title: "Local AI Assistant using Ollama",
    description: [
      "Runs Phi-3 Mini, Mistral 7B, and LLaMA 3.2 fully on-device via Ollama — no cloud calls",
      "FastAPI backend for offline operation with structured JSON outputs",
      "Pydantic validation and retry logic ensure consistent, well-formed responses",
      "Benchmarked all three models across speed, accuracy, and resource trade-offs",
    ],
    outcome:
      "Rigorous benchmark published on Dev.to — documented which model wins for which use case on consumer hardware.",
    tags: ["Ollama", "FastAPI", "LLaMA 3.2", "Mistral 7B", "Phi-3", "Pydantic", "Python"],
    badge: "Open Source",
    githubUrl: "https://github.com/hargurjeet/local_slm_experiments",
    liveUrl: "https://dev.to/gurjeet333/running-llms-locally-a-rigorous-benchmark-of-phi-3-mistral-and-llama-32-on-ollama-2289",
  },
];

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
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary/5 border border-primary/15 rounded-lg p-3 mb-4">
                <p className="text-primary text-xs leading-relaxed">
                  <span className="font-semibold">Outcome: </span>
                  {project.outcome}
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
