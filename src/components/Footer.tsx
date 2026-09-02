import Link from "next/link";
import { site } from "@/data/site";

const explore = [
  { label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: "Case studies", href: "/case-studies" },
  { label: "Process", href: "/#process" }, { label: "FAQs", href: "/#faqs" },
];
const utility = [{ label: "Privacy", href: "/privacy" }, { label: "Contact", href: "/contact" }];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl font-medium tracking-tight">ShipIt Studio</Link>
          <p className="mt-4 max-w-sm font-display text-lg italic text-muted">{site.tagline}</p>
          <p className="eyebrow mt-8">Follow us</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-ink hover:text-leaf">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            @{site.instagramHandle}
          </a>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-1">{explore.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[40px] items-center text-muted hover:text-ink">{l.label}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow">Utility</p>
          <ul className="mt-4 space-y-1">{utility.map((l) => <li key={l.href}><Link href={l.href} className="inline-flex min-h-[40px] items-center text-muted hover:text-ink">{l.label}</Link></li>)}</ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-1">
            <li><a href={site.phoneHref} className="inline-flex min-h-[40px] items-center text-muted hover:text-ink">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex min-h-[40px] items-center break-all text-muted hover:text-ink">{site.email}</a></li>
          </ul>
          <p className="eyebrow mt-8">Location</p>
          <p className="mt-3 text-muted">{site.location}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>All Rights Reserved © 2026 by ShipIt Studio</span><span>Gurugram, India</span>
        </div>
      </div>
    </footer>
  );
}
