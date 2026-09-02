"use client";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import Magnetic from "@/components/Magnetic";

const wordV = {
  hidden: { y: "110%", rotate: 4 },
  show: (i: number) => ({ y: 0, rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.07 } }),
};

function Word({ children, i, className = "" }: { children: React.ReactNode; i: number; className?: string }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span custom={i} variants={wordV} initial="hidden" animate="show" className={`inline-block origin-bottom-left ${className}`}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 md:pt-48">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[60vh] w-[120vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,90,45,.22),transparent_70%)] animate-pulseSoft" />
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
          className="eyebrow flex items-start gap-3 text-[10px] leading-relaxed sm:items-center sm:text-[11px]"
        >
          <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-lime shadow-[0_0_12px_#D4FF4F] sm:mt-0" />
          {site.tagline}
        </motion.p>

        <h1 className="h-display mt-6 text-[clamp(2.5rem,10.5vw,9rem)]">
          <Word i={0}>Pick</Word> <Word i={1}>your</Word>{" "}
          <Word i={2} className="font-serif font-normal italic tracking-[-0.02em] text-pop">headache.</Word>
          <br />
          <Word i={3}>We&apos;ll</Word> <Word i={4}>automate</Word> <Word i={5}>it.</Word>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.7 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-14 w-full px-8 text-base sm:w-auto">Book a demo</a></Magnetic>
          <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-14 w-full px-8 text-base sm:w-auto">Chat on WhatsApp →</a></Magnetic>
          <p className="font-mono text-xs text-muted sm:ml-4">Automation · Creatives · Internal tools</p>
        </motion.div>
      </div>
    </section>
  );
}
