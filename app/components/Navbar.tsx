"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "transformations", label: "Case Studies" },
  { id: "expertise", label: "Leadership" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-navy/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#about"
          onClick={handleClick("about")}
          className="font-bold text-ink tracking-tight text-sm sm:text-base"
        >
          Karthik <span className="text-accent-light">Kumar</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === link.id
                  ? "bg-accent/20 text-navy"
                  : "text-ink-muted hover:text-navy hover:bg-navy/[0.04]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-light hover:shadow-lg hover:shadow-accent/30 transition-all hover:-translate-y-0.5"
        >
          Download Resume
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block h-[2px] w-6 bg-ink rounded-full transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block h-[2px] w-6 bg-ink rounded-full transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-[2px] w-6 bg-ink rounded-full transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden glass border-t border-navy/10 overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-2">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className={`py-3 text-sm font-medium border-b border-navy/10 last:border-0 ${
                active === link.id ? "text-navy" : "text-ink-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-light transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
