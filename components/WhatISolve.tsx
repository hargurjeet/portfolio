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
    <section ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium bg-primary/10 text-primary font-mono mb-4">
            Value I Bring
          </span>
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
              className="bg-secondary/40 border border-border/30 rounded-[1.75rem] p-1.5 group hover:border-primary/45 hover:shadow-md transition-all duration-300 flex"
            >
              <div className="bg-card rounded-[calc(1.75rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] h-full flex flex-col justify-between w-full">
                <div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">
                    {item.headline}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
