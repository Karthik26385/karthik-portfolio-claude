"use client";

import { motion } from "framer-motion";

const CASES = [
  {
    tag: "Revenue Platform Modernization",
    company: "Starbucks",
    challenge:
      "A decade-old revenue accounting platform had accumulated significant technical debt, creating risk and slowing the pace of change for Finance and Technology teams.",
    solution:
      "Led the product and platform strategy to migrate core revenue recognition to a unified Azure & Databricks architecture — defining scope, governance, and a multi-phase delivery roadmap across Finance, Technology, and Compliance.",
    outcome:
      "Retired 10 years of technical debt, modernized the financial backbone for partner and licensee billing, and unified teams around a shared platform vision.",
  },
  {
    tag: "Capital Projects & Finance Transformation",
    company: "Macy's",
    challenge:
      "Macy's needed a way to bring real-estate capital project accounting into its enterprise finance ecosystem, with limited precedent for the integration required.",
    solution:
      "Converted the opportunity from pre-sales into a signed engagement through executive-level strategy and a proof of concept, then pioneered an industry-first integration between core finance systems and Autodesk Construction Cloud.",
    outcome:
      "Established a new standard for capital project accounting and dramatically improved real-estate portfolio visibility for Macy's leadership.",
  },
  {
    tag: "Financial Close Optimization — \"Gain-a-Day\"",
    company: "PepsiCo / Frito-Lay",
    challenge:
      "Frito-Lay's period-end financial close cycle was long and resource-intensive, delaying the strategic insights leadership needed to act quickly.",
    solution:
      "Owned and drove 'Project Gain-a-Day,' a finance transformation initiative that re-engineered the close process and the supporting financial systems landscape end to end.",
    outcome:
      "Compressed the period close cycle by a full business day — enabling faster, more confident strategic decisions for PepsiCo leadership.",
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Featured Transformations</h2>
          <p className="text-ink-muted max-w-2xl leading-relaxed">
            A closer look at three programs where I shaped strategy, aligned stakeholders,
            and delivered measurable outcomes at enterprise scale.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.company + c.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 sm:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-accent/15 text-accent-light border border-accent/20">
                  {c.company}
                </span>
                <h3 className="font-bold text-navy text-lg">{c.tag}</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-7">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-ink-muted mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent-light mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">{c.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-2">
                    Outcome
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">{c.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
