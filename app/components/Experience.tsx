"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Role = {
  role: string;
  company: string;
  date: string;
  bullets: string[];
};

const ROLES: Role[] = [
  {
    role: "Enterprise Product & Solution Leader",
    company: "Infosys Limited — Starbucks Corp",
    date: "Nov 2025 – Present",
    bullets: [
      "Defined end-to-end product strategy for integrating Starbucks's NextGen Loyalty platform into enterprise finance infrastructure",
      "Aligned engineering, architecture, and business stakeholders on solution scope, delivery milestones, and acceptance criteria",
      "Shaped data flow design and financial systems architecture to ensure compliance with core ledger and receivables requirements",
    ],
  },
  {
    role: "Enterprise Transformation Lead",
    company: "Infosys Limited — Macy's Corp",
    date: "Mar 2025 – Oct 2025",
    bullets: [
      "Converted pre-sales opportunity into a signed engagement through executive-level solution strategy and POC presentation",
      "Pioneered an industry-first integration between core finance systems and Autodesk Construction Cloud, setting a new standard for capital project accounting",
      "Defined the Capital Projects financial accountability framework, improving real estate portfolio visibility for Macy's leadership",
    ],
  },
  {
    role: "Enterprise Product & Solution Leader",
    company: "Infosys Limited — Starbucks Corp",
    date: "May 2024 – Feb 2025",
    bullets: [
      "Owned the product roadmap for Starbucks's Licensee Store reporting platform — spanning real-time royalty invoicing, analytics, and enterprise data integration",
      "Drove platform design decisions that increased reporting accuracy and reduced processing cycle time across Starbucks's licensee network",
      "Aligned cross-functional teams across Finance, Technology, and Licensee Operations on release milestones and feature scope",
    ],
  },
  {
    role: "Product Strategy & Platform Lead",
    company: "Infosys Limited — Starbucks Corp",
    date: "Apr 2022 – Sep 2023",
    bullets: [
      "Led the enterprise migration from legacy revenue accounting to a unified Azure & Databricks data platform, retiring 10 years of accumulated technical debt",
      "Shaped product scope, data governance framework, and compliance workflows for Starbucks's core revenue recognition system",
      "Unified Finance, Technology, and Compliance teams around a shared platform architecture and multi-phase delivery roadmap",
    ],
  },
  {
    role: "Technology Architect",
    company: "Infosys Limited — Starbucks Corp",
    date: "May 2018 – Jan 2021",
    bullets: [
      "Transformed Starbucks's month-end financial close from a manual, escalation-prone process to an automated platform — recognized at Starbucks Tech Conference",
      "Architected Starbucks's Royalty & Revenue system, creating the financial backbone for partner and licensee billing across the global network",
      "Led multi-year modernization of core finance systems, bridging Finance operations and enterprise technology strategy",
    ],
  },
];

const EARLIER_ROLES: Role[] = [
  {
    role: "Technology Architect",
    company: "Infosys Limited — Macy's Corp",
    date: "Jan 2021 – Sep 2021",
    bullets: [
      "Led a major enterprise finance platform upgrade program, coordinating technical and functional teams from assessment through go-live",
      "Defined upgrade strategy, governance model, and reusable tooling that reduced deployment risk and accelerated time-to-value",
    ],
  },
  {
    role: "Technology Architect",
    company: "Infosys Limited — Deckers Outdoors Corp",
    date: "Dec 2015 – May 2018",
    bullets: [
      "Led a supply chain integration program connecting Warehouse Management and Order Management systems, eliminating fulfillment errors across Deckers's global distribution",
      "Established offshore support model and operational playbook, scaling support capability without proportional cost growth",
    ],
  },
  {
    role: "Project Manager & Technology Lead",
    company: "Infosys Limited — Frito-Lay, PepsiCo",
    date: "Jan 2011 – Dec 2015",
    bullets: [
      "Led \"Project Gain-A-Day\" — a finance transformation initiative that compressed Frito-Lay's period close cycle by a full business day, enabling faster strategic decisions for PepsiCo leadership",
      "Owned an enterprise financial systems program spanning Payables, Receivables, General Ledger, and Supply Chain — from implementation through stabilization and optimization",
      "Progressed from individual contributor to Project Manager, building and leading a team of 15+ engineers and consultants",
    ],
  },
  {
    role: "Systems Engineer / Software Engineer",
    company: "Infosys Limited — Frito-Lay, PepsiCo (Bangalore)",
    date: "Aug 2007 – Jan 2011",
    bullets: [
      "Built foundational expertise in enterprise financial systems engineering at one of PepsiCo's largest operating subsidiaries",
      "Delivered core integrations for payables processing and banking infrastructure during a multi-year financial systems stabilization program",
    ],
  },
];

function TimelineCard({ item, index }: { item: Role; index: number }) {
  const fromLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 sm:pl-12"
    >
      <span className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-accent-light shadow-[0_0_0_4px_rgba(77,171,247,0.18)]" />
      <div className="glass rounded-2xl p-6 sm:p-7 hover:border-accent-light/30 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="font-bold text-navy text-base">{item.role}</h3>
            <p className="text-sm text-accent-light font-medium">{item.company}</p>
          </div>
          <span className="text-xs font-medium text-ink-muted bg-navy/[0.04] border border-navy/10 rounded-full px-3 py-1 whitespace-nowrap">
            {item.date}
          </span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {item.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
              <span className="text-accent-light shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <section id="experience" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Professional Journey</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[6px] sm:left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-light/40 via-navy/10 to-transparent" />
          <div className="flex flex-col gap-7">
            {ROLES.map((item, i) => (
              <TimelineCard key={item.company + item.date} item={item} index={i} />
            ))}

            <AnimatePresence initial={false}>
              {showEarlier && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-7">
                    {EARLIER_ROLES.map((item, i) => (
                      <TimelineCard key={item.company + item.date} item={item} index={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-9 pt-2 pl-10 sm:pl-12">
            <button
              id="toggleEarlier"
              onClick={() => setShowEarlier((s) => !s)}
              className="px-6 py-3 rounded-full glass text-sm font-semibold text-navy hover:border-accent-light/50 transition-all hover:-translate-y-0.5"
            >
              {showEarlier ? "Hide Earlier Roles" : "Show Earlier Roles"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
