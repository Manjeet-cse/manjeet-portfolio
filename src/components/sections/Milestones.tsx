"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AnimatedSection from "@/components/AnimatedSection";
import { milestones } from "@/data/portfolio";

export default function Milestones() {
  return (
    <AnimatedSection className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading>Milestones</SectionHeading>
        <p className="text-secondary mt-2 mb-12 max-w-lg">
          Key achievements and milestones along my journey.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/20 transition-all duration-500 text-center"
            >
              <div className="text-2xl mb-3">{milestone.icon}</div>
              <p className="font-heading text-xl font-bold text-primary mb-1">
                {milestone.value}
              </p>
              <p className="text-xs text-secondary leading-relaxed">
                {milestone.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
