"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  Award,
  Calendar,
  Activity,
  BookOpen,
  Briefcase,
} from "lucide-react";

interface KeyMetric {
  label: string;
  value: string;
}

interface RegularStat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Profile {
  title: string;
  username: string;
  url: string;
  logo: React.ReactNode;
  activeColor: string;
  badge: {
    text: string;
    style: string;
  };
  keyMetrics: KeyMetric[];
  regularStats: RegularStat[];
}

const profiles: Profile[] = [
  {
    title: "LeetCode",
    username: "manjeet_cse",
    url: "https://leetcode.com/u/manjeet_cse/",
    activeColor: "group-hover:border-[#FFA116]/30",
    badge: {
      text: "🔥 Active",
      style: "text-[#FFA116] border-[#FFA116]/20 bg-[#FFA116]/5",
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#FFA116]" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0L6.753 15.66c-.466-.45-.466-1.173 0-1.623l2.697-2.607c.466-.45 1.211-.45 1.677 0l4.975 4.808c.466.45.466 1.173 0 1.623zM21.94 12.3c-.466-.45-1.211-.45-1.677 0l-4.975 4.808c-.466.45-.466 1.173 0 1.623l2.697 2.607c.466.45 1.211.45 1.677 0l4.975-4.808c.466-.45.466-1.173 0-1.623zm-11.666-5.11l2.697-2.607c.466-.45 1.211-.45 1.677 0l4.975 4.808c.466.45.466 1.173 0 1.623l-2.697 2.607c-.466.45-1.211.45-1.677 0l-4.975-4.808c-.466-.45-.466-1.173 0-1.623z" />
      </svg>
    ),
    keyMetrics: [
      { label: "Problems Solved", value: "186+" },
      { label: "Contest Rating", value: "1445" },
    ],
    regularStats: [
      { label: "Global Rank", value: "Top 64.7%", icon: Award },
      { label: "Active Streak", value: "100 Days Badge 2026", icon: Calendar },
    ],
  },
  {
    title: "Codeforces",
    username: "manjeet_cse",
    url: "https://codeforces.com/profile/manjeet_cse",
    activeColor: "group-hover:border-accent/30",
    badge: {
      text: "🏆 Competitive",
      style: "text-accent border-accent/20 bg-accent/5",
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="5" height="13" fill="#3B82F6" rx="1.5" />
        <rect x="9.5" y="1" width="5" height="19" fill="#EF4444" rx="1.5" />
        <rect x="17" y="11" width="5" height="9" fill="#F59E0B" rx="1.5" />
      </svg>
    ),
    keyMetrics: [
      { label: "Problems Solved", value: "82+" },
      { label: "Contest Rating", value: "1029" },
    ],
    regularStats: [
      { label: "Current Rank", value: "Newbie", icon: Award },
      { label: "Contest Status", value: "Active Participant", icon: Activity },
    ],
  },
  {
    title: "GitHub",
    username: "Manjeet-cse",
    url: "https://github.com/Manjeet-cse",
    activeColor: "group-hover:border-neutral-400/30",
    badge: {
      text: "⭐ Open Source",
      style: "text-neutral-300 border-neutral-700 bg-white/5",
    },
    logo: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-[#F8FAFC]" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    keyMetrics: [
      { label: "Contributions", value: "109+" },
      { label: "Repositories", value: "10+" },
    ],
    regularStats: [
      { label: "OS Focus", value: "Open Source Learning", icon: BookOpen },
      { label: "Projects Focus", value: "Real-World Projects", icon: Briefcase },
    ],
  },
];

function ProfileCard({
  profile,
  index,
  isInView,
}: {
  profile: Profile;
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border transition-all duration-[400ms] ease-out shadow-xl overflow-hidden select-none"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.02)",
        backdropFilter: "blur(8px)",
        borderColor: isHovered ? "rgba(59, 130, 246, 0.8)" : "rgba(255, 255, 255, 0.06)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0px) scale(1)",
      }}
    >
      {/* Soft ambient glow around cards — becomes stronger on hover */}
      <div 
        className="absolute -inset-px rounded-2xl opacity-5 group-hover:opacity-15 blur-[8px] transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)"
        }}
      />

      {/* Left edge animated gradient line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-accent/50 to-transparent group-hover:top-0 group-hover:bottom-0 transition-all duration-500 z-10" />
      
      {/* Right edge animated gradient line */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent group-hover:top-0 group-hover:bottom-0 transition-all duration-500 z-10" />

      {/* Mouse-follow spotlight inside the card */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          left: springX,
          top: springY,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 70%)"
        }}
      />

      {/* Premium shine sweep animation overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl z-20">
        <div className="shine-effect absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
      </div>

      {/* Card Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-7">
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {profile.logo}
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-primary group-hover:text-white transition-colors">
                  {profile.title}
                </h3>
                <span className="text-xs text-secondary/50 font-mono">
                  {profile.username}
                </span>
              </div>
            </div>
            {/* Platform Badge */}
            <span className={`text-[10px] font-mono tracking-wide uppercase px-2.5 py-1 rounded-full border ${profile.badge.style}`}>
              {profile.badge.text}
            </span>
          </div>

          {/* Primary Large Key Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {profile.keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01]"
              >
                <p className="text-2xl font-bold font-mono text-primary tracking-tight group-hover:text-white transition-colors">
                  {metric.value}
                </p>
                <p className="text-[10px] font-mono tracking-wider uppercase text-secondary/50 mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Regular Stats list with Lucide Icons */}
          <div className="space-y-4 mb-7">
            {profile.regularStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b border-white/[0.02]">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className="w-4 h-4 text-secondary/55 group-hover:text-accent transition-colors duration-300" />
                    <span className="text-xs text-secondary/70 font-medium">{stat.label}</span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-primary">
                    {stat.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visit Profile Action Button */}
        <a
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-2.5 rounded-xl border border-white/[0.08] text-sm font-medium text-primary
                     hover:bg-white/[0.04] hover:border-accent/40 transition-all duration-300 flex items-center justify-center gap-1.5"
        >
          Visit {profile.title} <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
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
          x: [0, 40, -30, 0],
          y: [0, -30, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/[0.015] rounded-full blur-3xl"
      />
    </div>
  );
}

export default function CodingProfiles() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section id="coding-profiles" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <BackgroundBlobs />

      {/* Grid dots background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(circle, white 1.2px, transparent 1.2px)", 
          backgroundSize: "24px 24px" 
        }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        
        {/* Section Heading */}
        <div className="mb-14">
          <SectionHeading>Coding Profiles</SectionHeading>
          <p className="text-secondary/70 mt-2 max-w-xl text-base leading-relaxed">
            Track my problem-solving journey, competitive programming progress, and open-source development work.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard key={profile.title} profile={profile} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
