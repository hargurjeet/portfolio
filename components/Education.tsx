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
    <section id="education" ref={ref} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium bg-primary/10 text-primary font-mono mb-4">
            Academic Background
          </span>
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
              className="bg-secondary/40 border border-border/30 rounded-[1.75rem] p-1.5 group hover:border-primary/45 hover:shadow-md transition-all duration-300 flex"
            >
              <div className="bg-card rounded-[calc(1.75rem-0.375rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] h-full flex flex-col justify-between w-full">
                <div>
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground text-xs font-mono mb-2">
                    {edu.period}
                  </p>
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-bold mb-1 leading-snug hover:text-primary transition-colors duration-200 block active:scale-[0.99] origin-left"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
