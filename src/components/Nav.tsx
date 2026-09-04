"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { getLenis, scrollToTarget } from "@/lib/lenis";
import { cn } from "@/lib/cn";
import Magnetic from "./Magnetic";
import WhatsAppIcon from "./WhatsAppIcon";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setCompact(y > 80));

  useEffect(() => {
    const l = getLenis();
    if (open) { l?.stop(); document.body.style.overflow = "hidden"; }
    else { l?.start(); document.body.style.overflow = ""; }
    window.dispatchEvent(new CustomEvent("shipit:menu", { detail: { open } }));
    return () => { l?.start(); document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => { setOpen(false); }, [pathname]);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault(); setOpen(false);
      setTimeout(() => scrollToTarget(href.slice(1)), open ? 350 : 0);
    } else if (href === "/" && pathname === "/") {
      e.preventDefault(); setOpen(false);
      setTimeout(() => scrollToTarget(document.body, 0), open ? 350 : 0);
    } else setOpen(false);
  };

  const mobileLinks = navLinks.filter((l) => l.href !== "/");

  return (
    <>
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn("pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-[padding] duration-300 sm:px-5", compact ? "pt-2" : "pt-3 sm:pt-4")}>
        {/* frosted pill that hugs its content */}
        <div className={cn(
          "pointer-events-auto flex w-full items-center justify-between gap-2 rounded-full border border-white/70 bg-white/55 pl-4 pr-1.5 shadow-[0_1px_0_rgba(255,255,255,.6)_inset,0_10px_30px_-12px_rgba(31,36,22,.25)] backdrop-blur-xl backdrop-saturate-150 transition-[height,background-color] duration-300 lg:w-auto lg:pl-5",
          compact ? "h-11 bg-white/70 sm:h-12" : "h-[52px] sm:h-14"
        )}>
          <Link href="/" onClick={(e) => onNav(e, "/")} aria-label="ShipIt Studio home" className="flex items-center">
            <Image src="/media/logo.png" alt="ShipIt Studio" width={1748} height={247} priority className={cn("w-auto transition-[height] duration-300", compact ? "h-5" : "h-6")} />
          </Link>

          <nav className="hidden items-center lg:flex lg:px-2" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}
                className={cn("rounded-full px-3.5 py-2 text-[14px] text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink", pathname === l.href && l.href !== "/" && "text-ink")}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1.5 lg:flex">
            <Magnetic strength={0.2}>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"
                className={cn("flex items-center justify-center rounded-full border border-ink/10 bg-white text-[#25D366] shadow-soft transition-[height,width,transform] hover:scale-105", compact ? "h-8 w-8" : "h-10 w-10")}>
                <WhatsAppIcon size={compact ? 16 : 20} />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href={site.calendly} target="_blank" rel="noopener noreferrer" className={cn("btn px-4 text-[14px] transition-[height]", "bg-ink text-bg shadow-soft hover:bg-moss", compact ? "h-8" : "h-10")}>Contact us</a>
            </Magnetic>
          </div>

          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full lg:hidden">
            <span className="relative block h-3.5 w-5">
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-[1.5px] w-5 bg-ink" />
              <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="absolute left-0 top-[6px] h-[1.5px] w-5 bg-ink" />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="absolute left-0 top-[12px] h-[1.5px] w-5 bg-ink" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div key="menu"
            initial={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }} animate={{ clipPath: "circle(150% at calc(100% - 42px) 42px)" }} exit={{ clipPath: "circle(0% at calc(100% - 42px) 42px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-8 pt-20 lg:hidden">
            <motion.div initial="hidden" animate="show" exit="hidden" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }} className="flex h-full flex-col">
              <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="flex gap-2">
                <a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-12 flex-1 text-[15px]">Contact us</a>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="btn btn-ghost h-12 w-14 px-0 text-[#25D366]"><WhatsAppIcon size={22} /></a>
              </motion.div>
              <nav className="mt-6 flex flex-col" aria-label="Mobile">
                {mobileLinks.map((l, i) => (
                  <motion.div key={l.href} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Link href={l.href} onClick={(e) => onNav(e, l.href)} className="flex items-baseline gap-4 border-b border-line py-3.5 font-display text-[1.7rem] font-medium leading-none tracking-tight">
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>{l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
