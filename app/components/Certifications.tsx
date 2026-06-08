"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    title: "Certifications",
    icon: "🎓",
    items: [
      "AZ-900 Microsoft Azure Fundamentals",
      "DP-900 Microsoft Azure Data Fundamentals",
      "Oracle Fusion Cloud ERP Process Essentials",
      "Databricks Data Engineering Accreditation",
      "Databricks AI Agent & Generative AI Accreditation",
      "98-381 Introduction to Python Programming",
    ],
  },
  {
    title: "Awards & Recognition",
    icon: "🏆",
    items: [
      "Galaxy Award 2019 — Infosys",
      "Insta Award 2019 — Infosys",
      "Insta Award 2018 — Infosys",
      "Recognized at Starbucks Tech Conference (2018–2021)",
      "Starbucks Royalty System Innovation Award",
      "Multiple Excellence Awards for Client Delivery",
    ],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Certifications &amp; Awards</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-navy/10">
                <span className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-lg">
                  {group.icon}
                </span>
                <h3 className="font-bold text-navy">{group.title}</h3>
              </div>
              <ul className="flex flex-col gap-3.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                    <span className="text-accent-light font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
