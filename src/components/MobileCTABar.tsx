"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { site } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Sticky bottom CTA bar on phones/tablets, shown only once the user has scrolled past the first fold. */
export default function MobileCTABar() {
  const { scrollY } = useScroll();
  const [pastFold, setPastFold] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setPastFold(y > window.innerHeight * 0.9));
  useEffect(() => {
    const onMenu = (e: Event) => setMenuOpen((e as CustomEvent<{ open: boolean }>).detail.open);
    window.addEventListener("shipit:menu", onMenu);
    return () => window.removeEventListener("shipit:menu", onMenu);
  }, []);
  const show = pastFold && !menuOpen;
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="bar" initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(10px,env(safe-area-inset-bottom))] lg:hidden">
          <div className="flex gap-2 rounded-full border border-white/70 bg-white/70 p-1.5 shadow-lift backdrop-blur-xl">
            <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn h-11 flex-1 bg-ink text-bg text-[14px] hover:bg-moss">Contact us</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="btn h-11 w-14 bg-white px-0 text-[#25D366]"><WhatsAppIcon size={22} /></a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
