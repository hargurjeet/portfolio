"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database, Bot, Cpu, FlaskConical, CloudCog, LineChart,
} from "lucide-react";

const solutions = [
  {
    icon: Database,
    headline: "Scalable RAG pipelines",
    body: "Design and ship hybrid retrieval systems (BM25 + dense vectors + reranker) that process 100K+ multimodal documents with 90%+ accuracy in production.",
  },
  {
    icon: Bot,
    headline: "Agentic AI workflows",
    body: "Architect multi-agent systems with CrewAI and LangGraph — tool-augmented, guardrailed, and evaluated with Ragas before they touch production.",
  },
  {
    icon: Cpu,
    headline: "LLM evaluation frameworks",
    body: "Build frameworks that measure faithfulness, relevancy, hallucination, toxicity, and bias — so model upgrades don't silently degrade your product.",
  },
  {
    icon: FlaskConical,
    headline: "Research → production AI",
    body: "Take proof-of-concept LLM experiments and harden them: containerise, add CI/CD gates, instrument with latency and drift monitoring on AWS.",
  },
  {
    icon: CloudCog,
    headline: "AWS Bedrock & GenAI infra",
    body: "Deploy secure, cost-efficient GenAI systems using Bedrock, Textract, OpenSearch, and Step Functions — with CloudWatch observability built in.",
  },
  {
    icon: LineChart,
    headline: "ML-driven business outcomes",
    body: "Translate messy enterprise data into XGBoost, Random Forest, or deep-learning models that move real metrics: 30% fewer maintenance incidents, 10% budget saved.",
  },
];

export default function WhatISolve() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Value I Bring
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What I Can Solve
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((item, i) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 leading-snug">
                {item.headline}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
