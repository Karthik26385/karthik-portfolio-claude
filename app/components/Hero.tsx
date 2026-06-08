"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 sm:px-8 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-light/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-accent-light font-semibold tracking-[0.2em] text-xs uppercase mb-5">
            Karthik Kumar Kundun Shekar
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-6">
            <span className="text-gradient">Enterprise Product Leader</span>
            <br />
            Driving Finance, Data &amp; Platform Transformation
          </h1>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl mb-3">
            Driving enterprise-scale modernization across Finance, Data, and Platform
            ecosystems for Fortune 500 organizations.
          </p>
          <p className="text-ink-muted text-sm sm:text-base leading-relaxed max-w-xl mb-9">
            I lead cross-functional teams to build and scale enterprise platforms that
            align business strategy, financial systems, and modern data architectures
            to deliver measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-kumar-kundun-shekar-a7327743/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full glass text-navy font-semibold text-sm hover:border-accent-light/50 transition-all hover:-translate-y-0.5"
            >
              View LinkedIn
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="px-7 py-3.5 rounded-full glass text-navy font-semibold text-sm hover:border-accent-light/50 transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-light blur-2xl opacity-30 scale-95" />
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[2.5rem] overflow-hidden border border-navy/10 shadow-2xl shadow-navy/20">
            <Image
              src="/photo.png"
              alt="Karthik Kumar Kundun Shekar"
              fill
              sizes="(max-width: 640px) 14rem, 18rem"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
