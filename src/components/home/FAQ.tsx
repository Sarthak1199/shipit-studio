"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/faqs";
import { Reveal, Item } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faqs" className="section scroll-mt-[84px] border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <Item><p className="eyebrow">FAQs</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">Questions, <em>answered.</em></h2></Item>
        </Reveal>
        <Reveal className="md:col-span-8" amount={0.1}>
          <Item>
            <ul className="divide-y divide-line border-y border-line">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6">
                      <span className={cn("font-display text-lg font-medium leading-snug transition-colors sm:text-xl", isOpen ? "text-ink" : "text-ink/80")}>{f.q}</span>
                      <span className={cn("relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors", isOpen ? "border-moss bg-moss text-bg" : "border-line text-ink")}>
                        <span className="absolute h-[1.5px] w-3 bg-current" />
                        <motion.span animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }} className="absolute h-3 w-[1.5px] bg-current" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div id={`faq-${i}`} key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                          <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
