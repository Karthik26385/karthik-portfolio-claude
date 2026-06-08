"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const METRICS = [
  { value: "18+", label: "Years Driving Transformation" },
  { value: "4", label: "Fortune 500 Organizations" },
  { value: "25+", label: "Cross-Functional Teams Led" },
  { value: "100+", label: "Stakeholders Aligned" },
  { value: "$1–2M+", label: "Programs Shaped & Delivered" },
  { value: "10+", label: "Enterprise-Scale Transformations" },
];

function MetricCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-2xl p-7 text-center hover:border-accent-light/30 transition-colors"
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-2">{value}</div>
      <div className="text-xs sm:text-sm text-ink-muted leading-snug">{label}</div>
    </motion.div>
  );
}

export default function ScaleExperience() {
  return (
    <section id="scale" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            By the Numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Scale &amp; Experience</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} value={m.value} label={m.label} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
