"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    description: "TCS → Shell → BT",
  },
  {
    value: "$10M+",
    label: "Business Value Generated",
    description: "Across AI & ML initiatives",
  },
  {
    value: "100K+",
    label: "Documents Processed",
    description: "Multimodal, production scale",
  },
  {
    value: "7+",
    label: "AI Systems Shipped",
    description: "In telecom, energy & IT",
  },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-secondary border-y border-border py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-cyan-500 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-foreground font-semibold text-sm mb-1">{stat.label}</p>
            <p className="text-muted-foreground text-xs">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
