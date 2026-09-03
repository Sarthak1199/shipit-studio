"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";
import EggStamp from "@/components/EggStamp";
import { cn } from "@/lib/cn";

const groups = [
  { k: "Explore", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: "Case studies", href: "/case-studies" }, { label: "Process", href: "/#process" }, { label: "Pricing", href: "/#pricing" }, { label: "FAQs", href: "/#faqs" }] },
  { k: "Utility", items: [{ label: "Privacy", href: "/privacy" }, { label: "Contact", href: "/contact" }] },
];

export default function Footer() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Image src="/media/footer-desktop.jpg" alt="" fill sizes="100vw" className="hidden object-cover object-bottom md:block" />
      <Image src="/media/footer-mobile.jpg" alt="" fill sizes="100vw" className="object-cover object-bottom md:hidden" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,#F5F5F0_0%,rgba(245,245,240,.92)_35%,rgba(245,245,240,.55)_70%,rgba(245,245,240,.35)_100%)]" />

      <div className="container-x relative py-10 md:py-20">
        {/* brand row */}
        <div className="flex items-start justify-between gap-4 md:hidden">
          <div>
            <Link href="/" className="font-display text-xl font-medium tracking-tight">ShipIt Studio</Link>
            <p className="mt-1 max-w-[260px] font-display text-sm italic text-ink/75">{site.tagline}</p>
          </div>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white/70 text-ink">
            <InstaIcon />
          </a>
        </div>

        {/* mobile: accordion groups */}
        <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10 md:hidden">
          {groups.map((g) => {
            const isOpen = open === g.k;
            return (
              <div key={g.k}>
                <button type="button" onClick={() => setOpen(isOpen ? null : g.k)} aria-expanded={isOpen} className="flex min-h-[44px] w-full items-center justify-between py-2 text-left">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">{g.k}</span>
                  <span className={cn("text-ink/60 transition-transform", isOpen && "rotate-45")}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="flex flex-wrap gap-x-5 gap-y-1 pb-3">
                        {g.items.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[36px] items-center text-[15px] text-ink/80">{l.label}</Link></li>)}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 py-3 text-[15px]">
            <a href={site.phoneHref} className="inline-flex min-h-[36px] items-center text-ink/80">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="inline-flex min-h-[36px] items-center break-all text-ink/80">{site.email}</a>
            <span className="inline-flex min-h-[36px] items-center text-ink/60">{site.location}</span>
          </div>
        </div>

        {/* desktop columns */}
        <div className="hidden gap-12 md:grid md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="font-display text-2xl font-medium tracking-tight">ShipIt Studio</Link>
            <p className="mt-4 max-w-sm font-display text-lg italic text-ink/80">{site.tagline}</p>
            <p className="eyebrow mt-8">Follow us</p>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-leaf"><InstaIcon />@{site.instagramHandle}</a>
          </div>
          {groups.map((g) => (
            <div key={g.k} className="md:col-span-2">
              <p className="eyebrow">{g.k}</p>
              <ul className="mt-4 space-y-1">{g.items.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[40px] items-center text-ink/75 hover:text-ink">{l.label}</Link></li>)}</ul>
            </div>
          ))}
          <div className="md:col-span-3">
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-1">
              <li><a href={site.phoneHref} className="inline-flex min-h-[40px] items-center text-ink/75 hover:text-ink">{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} className="inline-flex min-h-[40px] items-center break-all text-ink/75 hover:text-ink">{site.email}</a></li>
            </ul>
            <p className="eyebrow mt-8">Location</p>
            <p className="mt-3 text-ink/75">{site.location}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70 md:mt-10 md:text-[11px]">
          <span>© 2026 ShipIt Studio · All rights reserved</span>
          <EggStamp />
        </div>
      </div>

      <div aria-hidden className="relative -mb-[2%] w-full overflow-hidden">
        <Image src="/media/logo.png" alt="" width={2172} height={400} sizes="110vw" className="relative left-1/2 w-[112vw] max-w-none -translate-x-1/2 opacity-90" />
      </div>
    </footer>
  );
}

function InstaIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}
