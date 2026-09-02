"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Item } from "@/components/Reveal";

const items = [
  { quote: "We used to reconcile invoices by hand every week. Sarthak built us a tool that put inwarding, GRNs and POs in one flow. Saved us hours, and we finally trust our numbers.", name: "Ayush Melwani", role: "Cofounder Lexi's" },
  { quote: "They turned our scattered CRM data and ops work into one live dashboard. Recovered 40% revenue by spotting gaps, saved hundreds of hours of manual work.", name: "Ram", role: "Dotpe CRM Lead" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % items.length);
  const prev = () => setI((v) => (v - 1 + items.length) % items.length);

  return (
    <section className="section border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <Item><p className="eyebrow">Build in public</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.4rem,7vw,5rem)]">We build in public.<br /><span className="font-serif font-normal italic text-lime">Come watch.</span></h2></Item>
          <Item>
            <div className="mt-8 flex items-center gap-3">
              <button type="button" onClick={prev} aria-label="Previous testimonial" className="btn btn-ghost h-12 w-12 px-0">←</button>
              <button type="button" onClick={next} aria-label="Next testimonial" className="btn btn-ghost h-12 w-12 px-0">→</button>
              <span className="ml-2 font-mono text-xs text-muted">{i + 1} / {items.length}</span>
            </div>
          </Item>
        </Reveal>

        <div className="relative h-[380px] sm:h-[340px] md:col-span-7">
          {/* stacked ghost cards */}
          <div aria-hidden className="card absolute inset-x-6 top-6 h-full rotate-[3deg] opacity-40" />
          <div aria-hidden className="card absolute inset-x-3 top-3 h-full rotate-[-2deg] opacity-60" />
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.figure
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => { if (info.offset.x < -60) next(); else if (info.offset.x > 60) prev(); }}
              initial={{ opacity: 0, x: 60, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -60, rotate: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="card noise absolute inset-0 flex cursor-grab touch-pan-y flex-col justify-between p-7 active:cursor-grabbing sm:p-9"
            >
              <span className="font-serif text-6xl leading-none text-pop">“</span>
              <blockquote className="text-lg leading-relaxed sm:text-xl">{items[i].quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pop/15 font-display text-sm font-extrabold text-pop">{items[i].name[0]}</span>
                <span>
                  <span className="block font-semibold">{items[i].name}</span>
                  <span className="block text-sm text-muted">{items[i].role}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <p className="absolute -bottom-7 right-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:hidden">Swipe →</p>
        </div>
      </div>
    </section>
  );
}
