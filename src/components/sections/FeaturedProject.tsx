"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { featuredProject, featuredProjectFeatures } from "@/data/portfolio";

function DashboardMockup() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-4 flex-1 h-6 rounded-md bg-white/[0.04] flex items-center px-3">
          <span className="text-[10px] text-secondary/50 font-mono">neokrishitech.app</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-5 space-y-4">
        {/* Top stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] text-secondary/60 mb-1 font-mono">Temperature</p>
            <p className="text-lg font-heading font-bold text-primary">28°C</p>
            <p className="text-[10px] text-accent mt-1">↑ Clear Sky</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] text-secondary/60 mb-1 font-mono">Wheat Price</p>
            <p className="text-lg font-heading font-bold text-primary">₹2,450</p>
            <p className="text-[10px] text-green-400 mt-1">↑ 3.2%</p>
          </div>
          <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
            <p className="text-[10px] text-secondary/60 mb-1 font-mono">AI Score</p>
            <p className="text-lg font-heading font-bold text-primary">94%</p>
            <p className="text-[10px] text-accent mt-1">Optimal</p>
          </div>
        </div>

        {/* Chart mockup */}
        <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
          <p className="text-[10px] text-secondary/60 mb-3 font-mono">Price Trends (7 days)</p>
          <div className="flex items-end gap-1.5 h-16">
            {[40, 55, 45, 65, 60, 75, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-accent/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* AI advisory */}
        <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs">🤖</span>
            <p className="text-[10px] text-accent font-mono font-medium">AI Advisory</p>
          </div>
          <p className="text-[11px] text-secondary leading-relaxed">
            Optimal sowing window for wheat in 5 days. Soil moisture levels are favorable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  return (
    <AnimatedSection id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Featured Work</SectionHeading>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <DashboardMockup />
          </motion.div>

          {/* Right — Project info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent text-sm font-mono mb-2">Featured Project</p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                {featuredProject.title}
              </h3>
            </div>

            <p className="text-secondary leading-relaxed">
              {featuredProject.description}
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3">
              {featuredProjectFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-lg border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                >
                  <span className="text-lg mb-2 block">{feature.icon}</span>
                  <h4 className="text-sm font-semibold text-primary mb-1">{feature.title}</h4>
                  <p className="text-xs text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/5 border border-accent/10 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 border border-white/[0.12] text-primary text-sm rounded-lg hover:border-white/[0.25] hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-2.5 bg-accent text-white text-sm rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center gap-2"
              >
                Live Demo
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
