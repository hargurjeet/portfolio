"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Liverpool John Moores University",
    url: "https://www.ljmu.ac.uk/",
    degree: "M.S. Machine Learning & Artificial Intelligence",
    period: "2023 – 2025",
    location: "Liverpool, UK",
    note: null,
  },
  {
    school: "IIIT Bangalore",
    url: "https://www.iiitb.ac.in/",
    degree: "Executive PG in Data Science & AI",
    period: "2022 – 2023",
    location: "Bangalore, India",
    note: "Statistics & Probability · ML · NLP · Neural Networks · MLOps",
  },
  {
    school: "New Horizon College of Engineering",
    url: "https://nhce.edu.in/",
    degree: "B.E. Electronics & Communication",
    period: "2006 – 2010",
    location: "Bangalore, India",
    note: "Visvesvaraya Technological University",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Academic
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <p className="text-muted-foreground text-xs font-mono mb-2">
                {edu.period}
              </p>
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-bold mb-1 leading-snug hover:text-primary transition-colors duration-200 block"
              >
                {edu.school}
              </a>
              <p className="text-primary text-sm mb-2">{edu.degree}</p>
              <p className="text-muted-foreground text-xs">{edu.location}</p>
              {edu.note && (
                <p className="text-muted-foreground/70 text-xs mt-3 italic leading-relaxed">
                  {edu.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
