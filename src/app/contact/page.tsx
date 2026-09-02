import type { Metadata } from "next";
import { site } from "@/data/site";
import Magnetic from "@/components/Magnetic";
export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="container-x pb-24 pt-32 sm:pt-40">
      <p className="eyebrow">Contact</p>
      <h1 className="h-display mt-4 text-[clamp(2.4rem,7vw,5rem)]">Let&apos;s fix your most annoying workflow. <span className="font-serif font-normal italic text-pop">This week.</span></h1>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Magnetic><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-14 w-full px-8 sm:w-auto">Book a demo</a></Magnetic>
        <Magnetic><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-14 w-full px-8 sm:w-auto">Chat on WhatsApp</a></Magnetic>
      </div>
      <ul className="mt-12 space-y-2 text-muted">
        <li><a href={site.phoneHref} className="inline-flex min-h-[44px] items-center hover:text-ink">{site.phone}</a></li>
        <li><a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center hover:text-ink">{site.email}</a></li>
        <li className="pt-2">{site.location}</li>
      </ul>
    </section>
  );
}
