"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left side — Text ── */}
          <div className="order-2 lg:order-1">
            <SectionHeading className="!mb-6">
              About Me
            </SectionHeading>

            <div className="max-w-[600px] space-y-5">
              {personalInfo.about.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.12,
                    ease: "easeOut",
                  }}
                  className="text-secondary/85 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Full Stack Dev",
                "Backend Engineering",
                "AI & ML",
                "Problem Solver",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-mono tracking-wide text-accent/90 border border-accent/[0.15] bg-accent/[0.06] rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right side — Portrait ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end items-center relative" style={{ isolation: "isolate", zIndex: 10 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-[552px] translate-y-4 flex justify-center lg:justify-end"
              style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
            >
              {/* Extremely subtle radial spotlight behind the image */}
              <div 
                className="absolute inset-0 pointer-events-none scale-125"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                  zIndex: -10
                }}
              />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full hover:scale-[1.03] transition-all duration-[400ms] ease-out flex justify-center lg:justify-end"
                style={{ 
                  zIndex: 20,
                  transform: "translate3d(0,0,0)",
                  willChange: "transform"
                }}
              >
                <Image
                  src="/images/manjeet-portrait.png"
                  alt="Manjeet Lodha — Developer Portrait"
                  width={644}
                  height={713}
                  className="w-full h-auto object-contain"
                  style={{ 
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                    willChange: "transform"
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
