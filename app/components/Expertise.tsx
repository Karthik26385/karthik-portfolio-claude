"use client";

import { motion } from "framer-motion";

const COMPETENCIES = [
  { icon: "◈", title: "Product Strategy & Vision" },
  { icon: "◎", title: "Roadmap Ownership" },
  { icon: "◉", title: "Stakeholder Alignment" },
  { icon: "◐", title: "Customer Discovery" },
  { icon: "◆", title: "Platform Product Management" },
  { icon: "▣", title: "Enterprise SaaS" },
  { icon: "◇", title: "Data Products & Analytics" },
  { icon: "◒", title: "Agile Product Development" },
  { icon: "✦", title: "AI & Data Strategy" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            How I Lead
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Product Leadership</h2>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            I bring a product-first mindset to enterprise transformation — translating
            ambiguity into clear strategy, aligning stakeholders around outcomes, and
            building platforms that scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMPETENCIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group glass rounded-2xl p-6 flex items-center gap-4 hover:border-accent-light/40 hover:bg-navy/[0.05] transition-all hover:-translate-y-1"
            >
              <span className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center text-xl text-accent-light group-hover:scale-110 transition-transform">
                {c.icon}
              </span>
              <h3 className="font-semibold text-navy text-sm sm:text-base">{c.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
