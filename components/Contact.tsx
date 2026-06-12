"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-secondary/25">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full px-3.5 py-1 text-[10px] uppercase tracking-[0.25em] font-medium bg-primary/10 text-primary font-mono mb-4">
            Get in Touch
          </span>
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
              className="group bg-primary hover:bg-primary/90 text-white pl-6 pr-2 py-2 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center gap-3 active:scale-[0.98]"
            >
              <span>gurjeet333@gmail.com</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
                <Mail size={14} className="text-white" />
              </span>
            </a>
          </div>
 
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/hargurjeet/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 active:scale-[0.97]"
            >
              <LinkedInIcon size={18} /> <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/hargurjeet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 active:scale-[0.97]"
            >
              <GitHubIcon size={18} /> <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
