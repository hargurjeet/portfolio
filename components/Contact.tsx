"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-xs tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Open to senior data science and AI engineering roles. If you&apos;re
            building something ambitious with LLMs or agentic systems, I&apos;d
            love to talk.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:gurjeet333@gmail.com"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Mail size={18} /> gurjeet333@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/hargurjeet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <GitHubIcon size={20} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
