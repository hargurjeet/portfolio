"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download, Sun, Moon,
  User, Layers, Briefcase, Code2, GraduationCap, Mail,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { LinkedInIcon, GitHubIcon } from "@/components/Icons";

const navLinks = [
  { label: "About",      href: "#about",      icon: User },
  { label: "Skills",     href: "#skills",      icon: Layers },
  { label: "Experience", href: "#experience",  icon: Briefcase },
  { label: "Projects",   href: "#projects",    icon: Code2 },
  { label: "Education",  href: "#education",   icon: GraduationCap },
  { label: "Contact",    href: "#contact",     icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled
          ? "bg-background/85 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-border/80 shadow-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Left: Avatar + name + title */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-9 h-9 flex-shrink-0">
            <Image
              src="/avatar.png"
              alt="Hargurjeet Singh Ganger"
              fill
              sizes="36px"
              className="rounded-full ring-2 ring-primary/20 object-cover"
            />
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="font-semibold text-foreground text-sm">Hargurjeet Singh</p>
            <p className="text-primary text-xs font-medium">Lead GenAI Specialist</p>
          </div>
        </div>

        {/* Center: Pill-segmented nav */}
        <div className="hidden lg:flex items-center bg-secondary border border-border rounded-full px-1.5 py-1.5 gap-0.5">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-background transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] font-medium group active:scale-[0.96]"
            >
              <Icon size={13} className="group-hover:text-primary transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              {label}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.93] cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hargurjeet/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.93]"
          >
            <LinkedInIcon size={14} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hargurjeet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-foreground hover:border-foreground hover:text-background transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.93]"
          >
            <GitHubIcon size={14} />
          </a>

          {/* Resume */}
          <a
            href="/Hargurjeet _AIEngineer_Architect_v2.pdf"
            download
            className="flex items-center gap-1.5 text-sm bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] font-medium active:scale-[0.96]"
          >
            <Download size={13} /> Resume
          </a>
        </div>

      </div>
    </motion.nav>
  );
}
