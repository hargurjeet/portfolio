"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, BrainCircuit, Layers, Network, BarChart2 } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

const titles = [
  "Senior Data Scientist",
  "GenAI Engineer",
  "RAG Systems Architect",
  "LLM Specialist",
];

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
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTitleIndex((i) => (i + 1) % titles.length),
      2800
    );
    return () => clearInterval(interval);
  }, []);

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
          <p className="text-primary text-xs font-mono tracking-[0.2em] uppercase mb-6">
            Available for new opportunities
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
            Hargurjeet
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 dark:from-primary dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Singh Ganger
            </span>
          </h1>

          <div className="h-12 flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-2xl md:text-3xl text-foreground/70 font-medium"
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-muted-foreground text-lg max-w-xl mb-8 leading-relaxed">
            Building production-grade LLM systems, RAG pipelines, and agentic
            workflows at British Telecom. 15+ years turning complex data into
            measurable business outcomes.
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
              href="/Hargurjeet _Agenti_AI_Specialist_2026.pdf"
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

        {/* ── Right column ── */}
        <div className="flex flex-col gap-4">

          {/* Card 1 — Open To */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="bg-card border border-border rounded-2xl p-5"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-widest uppercase text-primary">
                Open To
              </span>
            </div>

            {/* Role list */}
            <div>
              {roles.map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 px-2 py-2.5 rounded-lg hover:bg-primary/5 transition-colors -mx-2 ${
                    i < roles.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <Icon size={14} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
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
