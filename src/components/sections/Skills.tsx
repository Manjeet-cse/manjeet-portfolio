"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/portfolio";

/* ── Accent colors for each category ── */
const categoryColors: Record<string, { gradient: string; glow: string; text: string }> = {
  "Programming Languages": {
    gradient: "from-violet-500/20 to-fuchsia-500/10",
    glow: "rgba(139, 92, 246, 0.35)",
    text: "text-violet-400",
  },
  "Frontend Development": {
    gradient: "from-cyan-500/20 to-blue-500/10",
    glow: "rgba(6, 182, 212, 0.35)",
    text: "text-cyan-400",
  },
  "Backend Development": {
    gradient: "from-emerald-500/20 to-teal-500/10",
    glow: "rgba(16, 185, 129, 0.35)",
    text: "text-emerald-400",
  },
  Databases: {
    gradient: "from-amber-500/20 to-orange-500/10",
    glow: "rgba(245, 158, 11, 0.35)",
    text: "text-amber-400",
  },
  "Tools & Platforms": {
    gradient: "from-rose-500/20 to-pink-500/10",
    glow: "rgba(244, 63, 94, 0.35)",
    text: "text-rose-400",
  },
  "AI & Productivity": {
    gradient: "from-blue-500/20 to-indigo-500/10",
    glow: "rgba(59, 130, 246, 0.35)",
    text: "text-blue-400",
  },
};

/* ── Single skill card with mouse-tracking spotlight ── */
function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const colors = categoryColors[category.title] ?? {
    gradient: "from-accent/20 to-blue-500/10",
    glow: "rgba(59, 130, 246, 0.35)",
    text: "text-accent",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 80, scale: 0.9 }
      }
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: index * 0.15,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"
        style={{
          background: `radial-gradient(circle, ${colors.glow}, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden
                   group-hover:border-white/[0.14] group-hover:-translate-y-3 group-hover:scale-[1.03]
                   transition-all duration-500 ease-out"
        style={{
          boxShadow: isHovered
            ? `0 20px 60px -12px ${colors.glow}, 0 0 0 1px rgba(255,255,255,0.06)`
            : "0 0 0 1px rgba(255,255,255,0.03)",
        }}
      >
        <div className="relative p-6 md:p-7">
          {/* Icon + Title */}
          <div className="flex items-center gap-3.5 mb-6">
            <motion.div
              animate={isInView ? { y: [0, -4, 0] } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className={`flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] ${colors.text} text-lg font-mono font-bold group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500`}
            >
              {category.icon}
            </motion.div>
            <div>
              <h3 className="font-heading text-base font-semibold text-primary group-hover:text-white transition-colors duration-300">
                {category.title}
              </h3>
              <p className="text-xs text-secondary/50 font-mono mt-0.5">
                {category.skills.length} technologies
              </p>
            </div>
          </div>

          {/* Skill pills */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: index * 0.15 + skillIndex * 0.05 + 0.3,
                  ease: "easeOut",
                }}
                className="px-3 py-1.5 text-xs font-mono text-secondary/90 bg-white/[0.04] border border-white/[0.06] rounded-lg
                           hover:text-white hover:border-white/[0.18] hover:bg-white/[0.08] hover:scale-[1.08]
                           hover:shadow-[0_0_12px_rgba(59,130,246,0.15)]
                           transition-all duration-300 cursor-default select-none"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Floating background blobs ── */
function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-500/[0.02] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/[0.015] rounded-full blur-3xl"
      />
    </div>
  );
}

/* ── Animated particles ── */
function Particles() {
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

/* ── Tech stack marquee data ── */
const techStack = [
  "Python",
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Linux",
  "Tailwind CSS",
  "AI",
  "OpenAI",
];

/* ── Tech Marquee component ── */
function TechMarquee() {
  // Duplicate content for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div className="relative mb-14 group">
      {/* Fade masks — left & right */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling strip */}
      <div className="overflow-hidden">
        <div
          className="animate-marquee flex items-center gap-4 w-max"
          style={{ ["--marquee-duration" as string]: "28s" }}
        >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-mono
                         border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm
                         text-secondary/80 select-none cursor-default
                         hover:text-white hover:border-accent/40 hover:bg-accent/[0.08]
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                         transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Main Skills section ── */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32">
      <BackgroundBlobs />
      <Particles />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Tech stack marquee — above heading */}
        <TechMarquee />

        {/* Section header */}
        <SectionHeading>Technical Arsenal</SectionHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-secondary/70 mt-2 mb-14 max-w-lg text-base leading-relaxed"
        >
          Technologies and tools I use to architect, build, and ship modern
          web applications.
        </motion.p>

        {/* Cards grid — 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

