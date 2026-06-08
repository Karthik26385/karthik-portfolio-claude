"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    icon: "🎯",
    title: "Outcomes over output",
    text: "I anchor every roadmap decision in the business outcome it serves — not the volume of features shipped.",
  },
  {
    icon: "🧭",
    title: "Clarity from ambiguity",
    text: "I thrive on translating complex, ambiguous enterprise problems into clear strategy, scope, and sequencing that teams can execute against.",
  },
  {
    icon: "🤝",
    title: "Alignment as a craft",
    text: "Bringing engineering, design, finance, and executive stakeholders to a shared point of view is not overhead — it's the work that unlocks delivery.",
  },
  {
    icon: "🌱",
    title: "People-first leadership",
    text: "I grow teams the way I grow products: with patience, candor, and a relentless focus on helping people do their best work.",
  },
];

export default function LeadershipApproach() {
  return (
    <section id="leadership" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Leadership Approach</h2>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            I believe great product leadership is less about having all the answers, and
            more about building the conditions — clarity, trust, and alignment — for the
            right answers to emerge from the team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 hover:border-accent-light/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center text-xl">
                  {p.icon}
                </span>
                <h3 className="font-bold text-navy">{p.title}</h3>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
