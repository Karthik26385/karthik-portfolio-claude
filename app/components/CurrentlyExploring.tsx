"use client";

import { motion } from "framer-motion";

const TOPICS = [
  { icon: "🤖", text: "AI Agents for Enterprise Operations" },
  { icon: "🧠", text: "Data Intelligence Platforms & Databricks" },
  { icon: "💡", text: "Product-led Finance Transformation" },
  { icon: "🏗️", text: "Enterprise Platform Modernization" },
  { icon: "☁️", text: "Cloud-native Finance Systems" },
];

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Looking Ahead
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Currently Exploring</h2>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            Areas where I&apos;m actively deepening my thinking — and where I see the next
            wave of enterprise product opportunity.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {TOPICS.map((t, i) => (
            <motion.div
              key={t.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass rounded-full pl-3 pr-6 py-3 flex items-center gap-3 hover:border-accent-light/40 hover:-translate-y-0.5 transition-all"
            >
              <span className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-base">
                {t.icon}
              </span>
              <span className="text-sm font-medium text-navy">{t.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
