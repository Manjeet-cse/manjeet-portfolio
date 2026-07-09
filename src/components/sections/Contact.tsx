"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Sparkles, Users, Send } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Construct mailto link
    const mailtoLink = `mailto:manjeetlodha10@gmail.com?subject=${encodeURIComponent(
      subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      label: "Email",
      value: "manjeetlodha10@gmail.com",
      icon: Mail,
    },
    {
      label: "Status",
      value: "Open to Internships & Collaborations",
      icon: Sparkles,
    },
    {
      label: "Collaboration",
      value: "Startup Ideas • Hackathons • Team Projects",
      icon: Users,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── Left Column — Info ── */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-4"
            >
              <SectionHeading>Let&apos;s Connect</SectionHeading>
              <p className="text-secondary/80 text-base md:text-lg leading-relaxed">
                Whether you have an internship opportunity, startup idea, project collaboration, or simply want to discuss technology and innovation, I&apos;d love to hear from you.
              </p>
              <p className="text-secondary/80 text-base md:text-lg leading-relaxed font-semibold">
                Let&apos;s build something meaningful together.
              </p>
            </motion.div>

            {/* Contact Details List */}
            <div className="space-y-3.5 pt-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-sm 
                               hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-9.5 h-9.5 rounded-lg bg-accent/[0.08] border border-accent/[0.12] text-accent flex-shrink-0">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider uppercase text-secondary/40">
                        {info.label}
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-primary mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Right Column — Form (shifted down on desktop for visual balance) ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 w-full lg:pt-[130px]"
          >
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 md:p-8 shadow-2xl">
              {/* Outer Glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-secondary/60 tracking-wide uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-primary text-sm placeholder-secondary/50
                                 focus:outline-none focus:border-accent focus:bg-white/[0.03] focus:ring-1 focus:ring-accent transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-secondary/60 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-primary text-sm placeholder-secondary/50
                                 focus:outline-none focus:border-accent focus:bg-white/[0.03] focus:ring-1 focus:ring-accent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-secondary/60 tracking-wide uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity, collaboration proposal, etc."
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-primary text-sm placeholder-secondary/50
                               focus:outline-none focus:border-accent focus:bg-white/[0.03] focus:ring-1 focus:ring-accent transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-secondary/60 tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.02] text-primary text-sm placeholder-secondary/50
                               focus:outline-none focus:border-accent focus:bg-white/[0.03] focus:ring-1 focus:ring-accent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent text-white text-sm font-medium
                               hover:bg-accent/90 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
                               transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
