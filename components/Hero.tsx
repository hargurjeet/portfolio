"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, BrainCircuit, Layers, Network, BarChart2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";


const techChips = [
  "LangChain", "CrewAI", "AWS Bedrock", "RAG", "LangGraph", "FastAPI", "Python",
];

const roles = [
  { icon: BrainCircuit, label: "Lead / Principal GenAI Scientist" },
  { icon: Layers,       label: "AI Platform Architecture" },
  { icon: Network,      label: "Enterprise RAG & Agentic Systems" },
  { icon: BarChart2,    label: "Senior Data Science & ML" },
];


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(oklch(0.84_0.005_285)_1px,transparent_1px)] dark:bg-[radial-gradient(oklch(1_0_0_/_8%)_1px,transparent_1px)] bg-[size:32px_32px]" />
      {/* Ambient glow — shifted left so it sits behind the text column */}
      <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

        {/* ── Left column ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Hargurjeet
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 dark:from-primary dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Singh Ganger
            </span>
          </h1>

          <div className="flex flex-col gap-2.5 mb-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90 font-heading">
              Principal GenAI Architect & Data Scientist
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-foreground/75 text-xs md:text-sm font-semibold tracking-[0.1em] uppercase font-heading">
              <span>Enterprise RAG</span>
              <span className="text-primary font-black">•</span>
              <span>Agentic Workflows</span>
              <span className="text-primary font-black">•</span>
              <span>MLOps & Scale</span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed text-justify">
            I bridge the gap between proof-of-concept AI models and resilient, production-grade Generative AI architectures.
            Specializing in deploying high-fidelity enterprise RAG systems, orchestrating autonomous multi-agent workflows, and implementing robust MLOps guardrails that ensure safety, accuracy, and performance at scale.
          </p>

          {/* Tech chip row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {techChips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-mono bg-secondary border border-border text-muted-foreground px-3 py-1 rounded-full"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </a>
            <a
              href="/Hargurjeet _AI_Architect_2026.pdf"
              download
              className="border border-border hover:border-primary text-foreground px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 hover:text-primary"
            >
              <Download size={16} /> Resume
            </a>
            <a
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary text-foreground px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 hover:text-primary"
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/hargurjeet"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-primary text-foreground px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 hover:text-primary"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* ── Right column: Impact Snapshot ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none"
        >
          {/* Card 1: RAG Extraction */}
          <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/45 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">BT RAG</span>
              <BrainCircuit size={18} className="text-primary" />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">70%</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reduction in manual document extraction time via production LLM pipelines.
            </p>
          </div>

          {/* Card 2: Shell Maintenance */}
          <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-emerald-500/45 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-all duration-300" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider font-semibold">Shell ML</span>
              <BarChart2 size={18} className="text-emerald-500" />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">30%</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Cut in oil refinery maintenance costs through predictive modeling.
            </p>
          </div>

          {/* Card 3: BT Sales Boost */}
          <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-cyan-500/45 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all duration-300" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-cyan-500 uppercase tracking-wider font-semibold">BT Recs</span>
              <Layers size={18} className="text-cyan-500" />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">30%</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Increase in Value-Added Service sales using market-basket models.
            </p>
          </div>

          {/* Card 4: Document Scale */}
          <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-purple-500/45 hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all duration-300" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-500 uppercase tracking-wider font-semibold">Scale</span>
              <Network size={18} className="text-purple-500" />
            </div>
            <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">90%+</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Accuracy in multimodal document processing on 100K+ PDFs.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={20} className="text-muted-foreground/40" />
      </motion.div>
    </section>
  );
}
