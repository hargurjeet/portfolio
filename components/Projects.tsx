"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

const projects = [
  {
    title: "Production-Grade RAG Evaluation Pipeline",
    description:
      "A hybrid RAG system combining BM25 sparse search, vector search, and a reranker — with automated evaluation using RAGAS. GitHub Actions CI/CD gates auto-run evaluations on every PR; merges are blocked if faithfulness or relevancy drop below defined thresholds.",
    outcome:
      "End-to-end observability via Langfuse: p50/p90 latency tracking, token usage, and distributed tracing to debug retrieval quality.",
    tags: ["RAG", "RAGAS", "BM25", "GitHub Actions", "Langfuse", "LangChain", "Python"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/hybrid-rag",
    liveUrl: "https://huggingface.co/spaces/Hargurjeet/hybrid-rag-nextjs",
  },
  {
    title: "AI-Powered Resume Parser",
    description:
      "Upload a PDF resume → pdfplumber extracts the text → Llama 3.3 70B on Fireworks AI parses it into structured JSON via the instructor library. A split-view Next.js UI shows the original PDF alongside parsed data: experience timeline, color-coded skill tags, education cards, and a one-click JSON export.",
    outcome:
      "Live on Fly.io; structured output enforced with Pydantic v2 and instructor so the API never returns malformed JSON. Dark/light mode, drag-and-drop upload, animated progress steps.",
    tags: ["FastAPI", "Next.js", "Llama 3.3 70B", "Fireworks AI", "pdfplumber", "Pydantic", "Fly.io"],
    badge: "Live App",
    githubUrl: "https://github.com/hargurjeet/resume-parser",
    liveUrl: "https://hargurjeet-resume-ui.fly.dev",
  },
  {
    title: "Local AI Assistant using Ollama",
    description:
      "On-device inference assistant running Phi-3 Mini, Mistral 7B, and LLaMA 3.2 via Ollama — wrapped in a FastAPI backend for fully offline operation. Built for production reliability with structured JSON outputs and graceful failure handling.",
    outcome:
      "Benchmarked model performance across local inference trade-offs; Pydantic validation and retry logic ensure consistent, structured responses.",
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
              <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

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
