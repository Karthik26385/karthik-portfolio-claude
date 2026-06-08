"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Enterprise Product Leader</h2>
          <p className="text-ink-muted leading-relaxed text-base sm:text-lg mb-4">
            I&apos;m a product and platform leader with 18+ years of experience driving
            enterprise-scale transformation for Fortune 500 organizations. I specialize in
            shaping product strategy and roadmaps for complex Enterprise Platforms, Finance
            Systems, and Data Platforms — turning ambiguous business problems into
            well-scoped initiatives that ship and scale.
          </p>
          <p className="text-ink-muted leading-relaxed text-base sm:text-lg">
            Across Starbucks, Macy&apos;s, Deckers, and PepsiCo, I&apos;ve led cross-functional
            teams through cloud and platform modernization, data architecture, and
            large-scale process transformation — partnering with engineering, design, and
            executive stakeholders to align on vision, prioritize what matters, and deliver
            measurable business outcomes. My foundation in enterprise financial systems
            (including ERP platforms) gives me a deep, practical understanding of how
            mission-critical business processes work — and how to modernize them
            thoughtfully at scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
