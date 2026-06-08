"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    href: "mailto:karthik.kumar385@gmail.com",
    icon: "✉",
    label: "Email",
    value: "karthik.kumar385@gmail.com",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/karthik-kumar-kundun-shekar-a7327743/",
    icon: "in",
    label: "LinkedIn",
    value: "View Profile",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 sm:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative glass rounded-[2rem] px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-[120px]"
          />
          <div className="relative">
            <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Let&apos;s Connect</h2>
            <p className="text-ink-muted max-w-md mx-auto mb-12">
              Let&apos;s connect and discuss how we can work together.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 max-w-xl mx-auto">
              {CARDS.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-navy/[0.03] px-6 py-8 hover:border-accent-light/40 hover:bg-navy/[0.05] transition-all hover:-translate-y-1"
                >
                  <span className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-lg font-bold text-accent-light group-hover:scale-110 transition-transform">
                    {card.icon}
                  </span>
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-ink-muted">
                    {card.label}
                  </span>
                  <span className="text-sm font-semibold text-navy break-all">{card.value}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center gap-6 text-center text-xs text-ink-muted">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-7 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
          >
            Download Resume (PDF)
          </a>
          <p>&copy; 2026 Karthik Kumar Kundun Shekar. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
