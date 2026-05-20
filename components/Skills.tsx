"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BrainCircuit, Code2, Cog, Cloud, Database, Bot } from "lucide-react";

const skillGroups = [
  {
    category: "Generative AI",
    color: "blue",
    icon: BrainCircuit,
    skills: [
      "RAG Patterns", "Agents", "Fine-tuning", "Guardrails",
      "PII Filtering", "Vector DB", "Observability", "MCP",
    ],
  },
  {
    category: "LLM Frameworks & APIs",
    color: "indigo",
    icon: Code2,
    skills: [
      "LangChain", "LangGraph", "CrewAI", "OpenAI API",
      "Anthropic API", "Gemini API", "Langfuse", "RAGAS",
    ],
  },
  {
    category: "MLOps",
    color: "cyan",
    icon: Cog,
    skills: [
      "Docker", "FastAPI", "MLflow", "CI/CD",
      "GitHub Actions", "GitLab", "AWS SageMaker", "Feature Store",
    ],
  },
  {
    category: "Cloud (AWS)",
    color: "orange",
    icon: Cloud,
    skills: [
      "Bedrock", "Textract", "OpenSearch", "Lambda",
      "Step Functions", "CloudWatch", "SageMaker",
    ],
  },
  {
    category: "Core ML & Data",
    color: "emerald",
    icon: Database,
    skills: [
      "XGBoost", "Random Forests", "PyTorch", "TensorFlow",
      "scikit-learn", "BERT", "PySpark", "SQL",
    ],
  },
  {
    category: "Agentic Coding Tools",
    color: "violet",
    icon: Bot,
    skills: [
      "Cursor", "Claude Code", "Kiro", "Amazon Q Developer",
      "VS Code", "GitHub Copilot",
    ],
  },
];

const colorMap: Record<string, string> = {
  blue:    "bg-blue-50   dark:bg-blue-900/20   border border-blue-200   dark:border-blue-500/30   text-blue-700   dark:text-blue-300",
  indigo:  "bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300",
  cyan:    "bg-cyan-50   dark:bg-cyan-900/20   border border-cyan-200   dark:border-cyan-500/30   text-cyan-700   dark:text-cyan-300",
  orange:  "bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-500/30 text-orange-700 dark:text-orange-300",
  emerald: "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
  violet:  "bg-violet-50  dark:bg-violet-900/20  border border-violet-200  dark:border-violet-500/30  text-violet-700  dark:text-violet-300",
};

const iconBgMap: Record<string, string> = {
  blue:    "bg-blue-50   dark:bg-blue-900/30   text-blue-600   dark:text-blue-400",
  indigo:  "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
  cyan:    "bg-cyan-50   dark:bg-cyan-900/30   text-cyan-600   dark:text-cyan-400",
  orange:  "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  emerald: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
  violet:  "bg-violet-50  dark:bg-violet-900/30  text-violet-600  dark:text-violet-400",
};

const headerMap: Record<string, string> = {
  blue:    "text-blue-600   dark:text-blue-400",
  indigo:  "text-indigo-600 dark:text-indigo-400",
  cyan:    "text-cyan-600   dark:text-cyan-400",
  orange:  "text-orange-600 dark:text-orange-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  violet:  "text-violet-600  dark:text-violet-400",
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              {/* Category icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${iconBgMap[group.color]}`}>
                <group.icon size={28} />
              </div>

              {/* Category name */}
              <h3 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${headerMap[group.color]}`}>
                {group.category}
              </h3>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full px-3 py-1 text-sm font-medium ${colorMap[group.color]}`}
                  >
                    {skill}
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
