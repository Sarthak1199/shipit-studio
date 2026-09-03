import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import EggStamp from "@/components/EggStamp";

const explore = [
  { label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: "Case studies", href: "/case-studies" },
  { label: "Process", href: "/#process" }, { label: "FAQs", href: "/#faqs" },
];
const utility = [{ label: "Privacy", href: "/privacy" }, { label: "Contact", href: "/contact" }];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Image src="/media/footer-desktop.jpg" alt="" fill sizes="100vw" className="hidden object-cover object-bottom md:block" />
      <Image src="/media/footer-mobile.jpg" alt="" fill sizes="100vw" className="object-cover object-bottom md:hidden" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,#F5F5F0_0%,rgba(245,245,240,.92)_35%,rgba(245,245,240,.55)_70%,rgba(245,245,240,.35)_100%)]" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl font-medium tracking-tight">ShipIt Studio</Link>
          <p className="mt-4 max-w-sm font-display text-lg italic text-ink/80">{site.tagline}</p>
          <p className="eyebrow mt-8">Follow us</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-leaf">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            @{site.instagramHandle}
          </a>
          <div className="mt-8"><EggStamp /></div>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-1">{explore.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[40px] items-center text-ink/75 hover:text-ink">{l.label}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow">Utility</p>
          <ul className="mt-4 space-y-1">{utility.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[40px] items-center text-ink/75 hover:text-ink">{l.label}</Link></li>)}</ul>
        </div>
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
      <div className="relative border-t border-ink/10">
        <div className="container-x flex flex-col gap-2 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <span>All Rights Reserved © 2026 by ShipIt Studio</span><span>Gurugram, India</span>
        </div>
      </div>
      {/* full-bleed gradient wordmark, cropped at both edges */}
      <div aria-hidden className="relative -mb-[2%] w-full overflow-hidden">
        <Image src="/media/logo.png" alt="" width={2172} height={400} sizes="110vw" className="relative left-1/2 w-[112vw] max-w-none -translate-x-1/2 opacity-90" />
      </div>
    </footer>
  );
}
