"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-[20px] border border-[rgba(59,130,246,0.15)] bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)] transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Gradient placeholder for projects without images */
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-accent/10 via-white/[0.02] to-accent/5 flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-white/[0.08] tracking-wider">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
            </div>
          </div>
        )}

        {/* Status badge */}
        {project.status && (
          <div className="absolute top-3 right-3 z-10">
            <span
              className={`px-2.5 py-1 text-[10px] font-mono font-medium rounded-full backdrop-blur-md ${
                project.status === "Completed"
                  ? "bg-green-500/15 text-green-400 border border-green-500/20"
                  : "bg-amber-500/15 text-amber-400 border border-amber-500/20"
              }`}
            >
              {project.status}
            </span>
          </div>
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101418] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Title */}
        <h3 className="font-heading text-lg font-semibold text-primary group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono text-secondary/70 bg-white/[0.04] border border-white/[0.06] rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <AnimatedSection className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Projects</SectionHeading>
        <p className="text-secondary mt-2 mb-14 max-w-2xl text-sm md:text-base leading-relaxed">
          A collection of applications, experiments, and products I&apos;ve built
          while learning software engineering, full-stack development, APIs, and AI.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
