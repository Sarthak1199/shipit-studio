"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildPrompt } from "@/data/prompt";

const HEADLINE = "Built in 1 day. Backend and frontend. By Claude Fable 5.1.";

export default function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [typed, setTyped] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener("shipit:egg", on);
    return () => window.removeEventListener("shipit:egg", on);
  }, []);

  useEffect(() => {
    if (!open) { setTyped(""); setShowPrompt(false); return; }
    let i = 0;
    const id = setInterval(() => { i += 1; setTyped(HEADLINE.slice(0, i)); if (i >= HEADLINE.length) clearInterval(id); }, 26);
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { clearInterval(id); window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open]);

  const confetti = useMemo(() => Array.from({ length: 70 }, (_, i) => ({
    id: i, x: (Math.random() - 0.5) * 900, y: -200 - Math.random() * 500, r: Math.random() * 720 - 360,
    d: 1.4 + Math.random() * 1.2, s: 6 + Math.random() * 8,
    c: ["#2E3A1F", "#9DB27E", "#5C7A3A", "#F5F5F0", "#DFE7EC", "#C9A24D"][i % 6],
  })), []);

  const facts = [
    { k: "Project", v: "This website — shipitstudio" },
    { k: "Model", v: "Claude Fable 5.1" },
    { k: "Build time", v: "1 day, backend and frontend" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div key="egg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}
          className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/60 p-3 backdrop-blur-md sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Website built by AI">
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2">
            {confetti.map((p) => (
              <motion.span key={p.id} initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0.6 }}
                animate={{ x: p.x, y: [0, p.y, p.y + 700], rotate: p.r, opacity: [1, 1, 0], scale: 1 }}
                transition={{ duration: p.d, ease: [0.2, 0.8, 0.3, 1] }}
                style={{ width: p.s, height: p.s * 0.6, background: p.c }} className="absolute block rounded-sm" />
            ))}
          </div>

          <motion.div initial={{ scale: 0.94, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.97, y: 12 }} transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()} data-lenis-prevent
            className="card relative max-h-[92svh] w-full max-w-2xl overflow-y-auto p-3 shadow-lift">
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-ink shadow-soft backdrop-blur hover:bg-white">×</button>

            <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-surface2">
              <Image src="/media/egg-site.jpg" alt="Screenshot of the ShipIt Studio homepage" fill sizes="640px" className="object-cover object-top" />
            </div>

            <div className="p-5 sm:p-7">
              <Image src="/media/symbol.png" alt="" width={200} height={100} className="h-8 w-auto opacity-90" />
              <p className="eyebrow mt-3">Website built by AI</p>
              <h2 className="h-display mt-3 min-h-[2.2em] text-[clamp(1.5rem,3.4vw,2.2rem)]">
                {typed}<span className="ml-0.5 inline-block h-[0.9em] w-[0.08em] translate-y-[3px] animate-pulse bg-moss" />
              </h2>

              <dl className="mt-6 divide-y divide-line rounded-2xl border border-line">
                {facts.map((f) => (
                  <div key={f.k} className="grid gap-1 px-4 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{f.k}</dt>
                    <dd className="text-[15px] text-ink">{f.v}</dd>
                  </div>
                ))}
              </dl>

              <button type="button" onClick={() => setShowPrompt((v) => !v)} aria-expanded={showPrompt}
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-display text-lg font-semibold text-moss hover:underline">
                {showPrompt ? "Hide the prompt" : "See the prompt used"}
                <span className={`transition-transform ${showPrompt ? "rotate-90" : ""}`}>→</span>
              </button>
              <AnimatePresence initial={false}>
                {showPrompt && (
                  <motion.div key="prompt" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <pre className="mt-3 max-h-[40vh] select-none overflow-y-auto whitespace-pre-wrap rounded-2xl border border-line bg-bg p-4 font-mono text-[12px] leading-relaxed text-ink/85" onContextMenu={(e) => e.preventDefault()} data-lenis-prevent>
                      {buildPrompt}
                    </pre>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">View only</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
