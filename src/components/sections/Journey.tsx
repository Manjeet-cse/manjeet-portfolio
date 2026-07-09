"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { journeySteps } from "@/data/portfolio";

function TimelineCard({
  step,
  index,
}: {
  step: (typeof journeySteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }
        }
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`flex-1 ml-12 md:ml-0 ${
          isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"
        }`}
      >
        <div className="group relative p-5 md:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-500">
          {/* Hover glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-accent/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative">
            {/* Year badge + subtitle row */}
            <div
              className={`flex items-center gap-2 mb-3 flex-wrap ${
                isLeft ? "md:justify-end" : "md:justify-start"
              }`}
            >
              {step.year && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wide bg-accent/[0.12] text-accent border border-accent/[0.15]">
                  {step.year}
                </span>
              )}
              {step.subtitle && (
                <span className="text-xs text-secondary/60 font-mono tracking-wide">
                  {step.subtitle}
                </span>
              )}
            </div>

            {/* Icon + Title */}
            <div
              className={`flex items-center gap-3 mb-2.5 ${
                isLeft
                  ? "md:justify-end md:flex-row-reverse"
                  : "md:justify-start"
              }`}
            >
              <span className="text-2xl flex-shrink-0 grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                {step.icon}
              </span>
              <h3 className="font-heading text-base font-semibold text-primary group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-secondary/75 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Timeline dot — glowing */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-7 z-10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView
              ? { scale: 1, opacity: 1 }
              : { scale: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className={`w-3.5 h-3.5 rounded-full bg-accent border-[2.5px] border-background ${
            isInView ? "animate-glow-pulse" : ""
          }`}
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: false, amount: 0.1 });

  return (
    <AnimatedSection id="journey" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>My Journey</SectionHeading>

        <div className="mt-16 relative" ref={timelineRef}>
          {/* Timeline line — animated draw effect */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:-translate-x-px"
          />

          <div className="space-y-10 md:space-y-14">
            {journeySteps.map((step, index) => (
              <TimelineCard key={step.title} step={step} index={index} />
            ))}
          </div>

          {/* Timeline end cap */}
          <motion.div
            initial={{ scale: 0 }}
            animate={timelineInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 -bottom-2 w-2 h-2 rounded-full bg-accent/30"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
