"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "British Telecom (BT)",
    role: "Senior Data Scientist",
    period: "May 2022 – Present",
    location: "Bangalore, India",
    highlights: [
      "Architected and led delivery of an enterprise-grade conversational AI system (LLMs + RAG), reducing manual document extraction time by 70% while processing 100K+ files with 90%+ accuracy via AWS Bedrock and OpenSearch.",
      "Designed and deployed multi-step agentic workflows using CrewAI and LangGraph, integrating JSON schema validation, retry loops, and custom hallucination guardrails in production.",
      "Developed an LLM evaluation framework using Ragas and LLM-as-judge pipelines to assess faithfulness, toxicity, bias, and hallucination detection.",
      "Built an automated email intelligence pipeline processing 6,000+ weekly escalation emails, fine-tuning a LLaMA-2 7B model locally via QLoRA for a 40% F1-score improvement.",
      "Engineered recommendation systems (Random Forest + XGBoost) and market basket analysis (Apriori) increasing SD-WAN sales by 10% and Value-Added Services (VAS) sales by 30%.",
    ],
  },
  {
    company: "Royal Dutch Shell",
    role: "Data Scientist",
    period: "Sep 2016 – May 2022",
    location: "Bangalore, India",
    highlights: [
      "Developed and evaluated predictive maintenance models (XGBoost, Random Forest) using SHAP-based interpretability and ROC-AUC scoring, cutting equipment maintenance costs by 30% and unplanned downtime by 25%.",
      "Engineered end-to-end data pipelines in Python (Pandas, NumPy) and developed Power BI dashboards to forecast materials on-time delivery across 5 geographies, saving 10% budget.",
      "Acquired 5+ years of experience with data warehousing, ETL pipelines, big data analytics, and relational databases.",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    role: "IT Analyst",
    period: "Dec 2010 – Aug 2016",
    location: "India / UK",
    highlights: [
      "Performed System Integration Testing (SIT) and User Acceptance Testing (UAT) to validate client Point-of-Sale (PoS) systems at enterprise scale.",
      "Spent one year in the UK guiding offshore teams through the implementation of new PoS software.",
      "Acquired extensive experience working with card and payment systems, PCI standards, and ISO 8583 protocols.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Line grows from 0% to 100% height as you scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Glow orb travels down the line
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Orb fades in at start and out at end
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.96, 1],
    [0, 1, 1, 0]
  );

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Work Experience
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Static faint track — always visible */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50" />

          {/* Scroll-driven fill line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary/60 to-primary/20"
          />

          {/* Glowing orb that travels down */}
          <motion.div
            style={{ top: glowY, opacity: glowOpacity }}
            className="absolute left-4 -translate-x-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none z-10"
          >
            {/* Outer glow halo */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-md scale-[2.5]" />
            {/* Inner bright dot */}
            <div className="absolute inset-[4px] rounded-full bg-primary" />
          </motion.div>

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center z-20">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground font-mono bg-secondary px-2 py-1 rounded-md">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
