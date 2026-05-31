"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const highlights = ["LLMs", "RAG", "Agentic AI", "MLOps", "AWS", "Python", "GenAI"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            From IT Analyst to{" "}
            <span className="text-primary">AI Systems Builder</span>
          </h2>

          <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-cyan-500 blur-md opacity-20 scale-110" />
                <Image
                  src="/avatar.png"
                  alt="Hargurjeet Singh Ganger"
                  width={180}
                  height={180}
                  className="relative rounded-full ring-4 ring-primary/30 ring-offset-4 ring-offset-background object-cover"
                  priority
                />
              </div>
            </div>

            {/* Story */}
            <div>
              <div className="space-y-5 text-foreground/80 text-lg leading-relaxed text-justify">
                <p>
                  At British Telecom I&apos;m leading the Generative AI
                  charge — deploying RAG-powered chatbots on AWS Bedrock, building
                  multi-agent workflows with CrewAI, and designing LLM evaluation
                  frameworks that catch hallucinations before they reach production.
                  My focus is always the same: AI that works in the real world, not
                  just the notebook.
                </p>
                <p>
                  Before that, at Royal Dutch Shell, I moved into data science —
                  building predictive maintenance models that cut equipment downtime
                  by 25% across oil refineries, and forecasting dashboards that
                  saved 10% of budget allocations across five geographies. That&apos;s
                  where I fell in love with the gap between a working model and a
                  working solution.
                </p>
                <p>
                  I started my career at TCS testing point-of-sale systems, spending
                  a year in the UK guiding offshore teams through complex software
                  rollouts. Those early years taught me how enterprise systems break
                  under real conditions — a foundation that still shapes how I
                  build today.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/8 dark:bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
