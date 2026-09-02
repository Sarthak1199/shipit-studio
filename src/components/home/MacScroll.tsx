"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chips = [
  { text: "Dashboards", pos: "left-[4%] top-[18%]" },
  { text: "Automations", pos: "right-[4%] top-[30%]" },
  { text: "Creatives", pos: "left-[8%] bottom-[18%]" },
];

export default function MacScroll() {
  const outer = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)", reduce: "(prefers-reduced-motion: reduce)" },
        (c) => {
          const { mobile, reduce } = c.conditions as { mobile: boolean; reduce: boolean };
          if (reduce) { gsap.set([img.current, glow.current, ...chipRefs.current], { clearProps: "all", opacity: 1 }); return; }
          const tl = gsap.timeline({
            scrollTrigger: { trigger: outer.current, start: "top 85%", end: "bottom bottom", scrub: 0.8 },
          });
          tl.fromTo(
            img.current,
            { scale: mobile ? 0.68 : 0.5, rotateX: 24, rotateZ: -9, y: mobile ? 60 : 140, opacity: 0.35, filter: "blur(6px)" },
            { scale: 1, rotateX: 0, rotateZ: 0, y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "none" }
          )
            .fromTo(glow.current, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.8, ease: "none" }, 0.2)
            .fromTo(chipRefs.current, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.3, ease: "none" }, 0.85)
            .to({}, { duration: 0.35 }); // hold while locked in place
        }
      );
    }, outer);
    const t = setTimeout(() => ScrollTrigger.refresh(), 800);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    <div ref={outer} className="relative h-[170vh] md:h-[190vh]">
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden [perspective:1400px]">
        <div ref={glow} aria-hidden className="absolute left-1/2 top-1/2 h-[70vw] max-h-[720px] w-[70vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,90,45,.35),rgba(212,255,79,.08)_55%,transparent_75%)] blur-2xl" />
        <div ref={img} className="relative w-[min(88vw,760px)] will-change-transform [transform-style:preserve-3d]">
          <Image
            src="/media/mac.png" alt="A classic Macintosh whose screen reads: We make your enterprise AI-native"
            width={1374} height={1145} priority sizes="(max-width: 768px) 88vw, 760px"
            className="h-auto w-full drop-shadow-[0_40px_80px_rgba(0,0,0,.6)]"
          />
        </div>
        {chips.map((c, i) => (
          <div
            key={c.text}
            ref={(el) => { if (el) chipRefs.current[i] = el; }}
            className={`absolute ${c.pos} hidden rounded-full border border-line bg-surface/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-ink backdrop-blur md:block`}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-pop" />{c.text}
          </div>
        ))}
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Scroll</p>
      </div>
    </div>
  );
}
