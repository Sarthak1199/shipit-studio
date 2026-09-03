"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Item } from "@/components/Reveal";
import SectionCTA from "@/components/SectionCTA";

const items = [
  { quote: "We used to reconcile invoices by hand every week. Sarthak built us a tool that put inwarding, GRNs and POs in one flow. Saved us hours, and we finally trust our numbers.", name: "Ayush Melwani", role: "Cofounder, Lexi's" },
  { quote: "They turned our scattered CRM data and ops work into one live dashboard. Recovered 40% revenue by spotting gaps, saved hundreds of hours of manual work.", name: "Ram", role: "DotPe CRM Lead" },
  { quote: "Sarthak gave us AI-generated ad creatives we could actually run, a spy tool that tells us what competitors are doing on quick commerce every morning, and agents that turn product reviews into landing pages. Turnaround went from days to hours, and our ad ROAS went up.", name: "Sahil", role: "Co-founder, MyMuse" },
];

/** Partial-peek carousel: ~1.3 cards visible, drag on desktop, swipe on touch. */
export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [limit, setLimit] = useState(0);
  useEffect(() => {
    const measure = () => { if (track.current && viewport.current) setLimit(Math.max(0, track.current.scrollWidth - viewport.current.clientWidth)); };
    measure(); window.addEventListener("resize", measure); return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Item><p className="eyebrow">Testimonials</p></Item>
            <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">In their <em>words.</em></h2></Item>
          </div>
        </Reveal>
      </div>
      <div ref={viewport} className="mt-10 overflow-hidden pl-5 sm:pl-8 md:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
        <motion.div ref={track} drag="x" dragConstraints={{ left: -limit, right: 0 }} dragElastic={0.12} className="flex cursor-grab gap-5 pr-10 active:cursor-grabbing">
          {items.map((t) => (
            <figure key={t.name} className="card flex w-[78vw] shrink-0 select-none flex-col justify-between p-7 sm:w-[520px] sm:p-9">
              <span className="font-display text-6xl leading-none text-sage">“</span>
              <blockquote className="mt-2 font-display text-xl leading-snug sm:text-2xl">{t.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-moss font-display text-sm text-bg">{t.name[0]}</span>
                <span><span className="block font-semibold">{t.name}</span><span className="block text-sm text-muted">{t.role}</span></span>
              </figcaption>
            </figure>
          ))}
          <div aria-hidden className="flex w-[40vw] shrink-0 items-center justify-center rounded-[28px] border border-dashed border-line font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:w-[280px]">More soon</div>
        </motion.div>
      </div>
      <div className="container-x"><SectionCTA className="mt-10" label="Want a quote like this?" /></div>
    </section>
  );
}
