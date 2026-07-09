"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { personalInfo, codeSnippet } from "@/data/portfolio";

function CodeCard() {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedText(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [hasStarted]);

  const highlightedCode = useMemo(() => {
    return syntaxHighlight(displayedText);
  }, [displayedText]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-lg"
    >
      {/* Card glow */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-50" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d1117] overflow-hidden shadow-2xl">
        {/* Window controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-secondary/50 font-mono">developer.ts</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
          <pre className="whitespace-pre-wrap">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
          {/* Blinking cursor */}
          <span
            className={`inline-block w-[2px] h-[18px] bg-accent ml-[1px] align-middle ${
              isComplete ? "animate-blink" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

function syntaxHighlight(code: string): string {
  const keywords = new Set([
    "const", "let", "var", "function", "return", "if", "else", "for", "while",
  ]);

  // Tokenize the code so each token is classified independently —
  // no regex ever sees another regex's output.
  const tokenPattern =
    /"[^"]*"|'[^']*'|`[^`]*`|\b\w+\b(?=\s*:)|\b\w+\b|[{}[\]]|[^\S\r\n]+|\r?\n|./g;

  const parts: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = tokenPattern.exec(code)) !== null) {
    const token = match[0];

    if (/^["'`]/.test(token)) {
      // String literals
      parts.push(`<span class="text-[#a5d6ff]">${escapeHtml(token)}</span>`);
    } else if (keywords.has(token)) {
      // Language keywords
      parts.push(`<span class="text-[#ff7b72]">${token}</span>`);
    } else if (/^\w+$/.test(token)) {
      // Check if this word is followed by a colon (property key)
      const rest = code.slice(tokenPattern.lastIndex);
      if (/^\s*:/.test(rest)) {
        parts.push(`<span class="text-[#d2a8ff]">${escapeHtml(token)}</span>`);
      } else {
        parts.push(`<span class="text-[#e6edf3]">${escapeHtml(token)}</span>`);
      }
    } else if (/^[{}[\]]$/.test(token)) {
      // Brackets
      parts.push(`<span class="text-[#e6edf3]">${token}</span>`);
    } else {
      parts.push(escapeHtml(token));
    }
  }

  return parts.join("");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function Hero() {
  const taglineParts = personalInfo.tagline.split(" | ");

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side — Text */}
          <div className="space-y-8">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm text-xs text-secondary/80 font-mono tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for internships
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-secondary/60 text-sm font-mono tracking-[0.2em] uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <div className="space-y-0 -mt-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-heading text-6xl md:text-8xl font-bold text-primary tracking-tight leading-[0.9]"
              >
                {personalInfo.firstName.toUpperCase()}
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-6xl md:text-8xl font-bold text-primary tracking-tight leading-[0.9]"
              >
                {personalInfo.lastName.toUpperCase()}
                <span className="bg-gradient-to-b from-accent to-blue-400 bg-clip-text text-transparent">
                  .
                </span>
              </motion.h1>
            </div>

            {/* Tagline — segmented pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              {taglineParts.map((part, i) => (
                <span key={part} className="flex items-center gap-3">
                  <span className="text-accent/90 font-mono text-xs tracking-[0.2em] uppercase font-medium">
                    {part}
                  </span>
                  {i < taglineParts.length - 1 && (
                    <span className="text-white/20 text-xs select-none">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-secondary/80 text-base md:text-lg max-w-md leading-relaxed"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <a
                href="#projects"
                className="group relative px-7 py-3.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent/90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/30"
              >
                View Projects
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-white/[0.1] text-primary text-sm font-medium rounded-xl hover:border-white/[0.2] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right side — Code Card */}
          <div className="flex justify-center lg:justify-end">
            <CodeCard />
          </div>
        </div>
      </div>
    </section>
  );
}
