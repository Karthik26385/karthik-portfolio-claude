"use client";

import { motion } from "framer-motion";

const IMPACTS = [
  {
    icon: "📈",
    text: "Shaped multi-million-dollar platform strategies that converted pre-sales opportunities into signed enterprise engagements",
  },
  {
    icon: "⚡",
    text: "Compressed Frito-Lay's financial close cycle by a full business day through 'Project Gain-a-Day,' accelerating leadership decision-making",
  },
  {
    icon: "🔗",
    text: "Pioneered an industry-first integration between enterprise finance systems and Autodesk Construction Cloud for capital project accounting",
  },
  {
    icon: "🚀",
    text: "Led the migration of a decade-old revenue accounting platform to a unified Azure & Databricks data architecture, retiring years of technical debt",
  },
  {
    icon: "🤝",
    text: "Aligned 100+ stakeholders across Finance, Technology, and Operations to deliver complex, multi-phase transformation roadmaps",
  },
  {
    icon: "🏆",
    text: "Recognized at the Starbucks Tech Conference for transforming a manual, escalation-prone financial close into an automated platform",
  },
];

export default function BusinessImpact() {
  return (
    <section id="impact" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Business Impact</h2>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            Results I&apos;ve helped deliver for Fortune 500 organizations — measured in
            speed, scale, and strategic alignment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IMPACTS.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-7 hover:border-accent-light/30 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-xl mb-5">
                {item.icon}
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
