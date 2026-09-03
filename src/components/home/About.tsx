import Image from "next/image";
import { site } from "@/data/site";
import { Reveal, Item } from "@/components/Reveal";

export default function About() {
  return (
    <section className="section border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <Item>
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[28px] bg-surface2 shadow-soft">
              {site.founderPhoto ? (
                <Image src={site.founderPhoto} alt="Sarthak, Founder of ShipIt Studio" fill sizes="(max-width: 768px) 100vw, 440px" className="object-cover" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-moss font-display text-2xl text-bg">S</span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Founder photo → /public/media/founder.jpg</p>
                </div>
              )}
              <p className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/75 px-4 py-3 font-display text-lg backdrop-blur-md">Sarthak, <em>Founder</em></p>
            </div>
          </Item>
        </Reveal>
        <Reveal className="md:col-span-7">
          <Item><p className="eyebrow">About</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.4rem,6vw,4.4rem)]">Hi, I&apos;m <em>Sarthak</em></h2></Item>
          <Item>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">Four years as a Product Manager driving growth and conversion at scale at Zomato and MyMuse.</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/85">Hands-on with the stack: GPT-powered agent workflows, automation tooling, and a SQL, Python and analytics toolkit that ships.</p>
          </Item>
          <Item>
            <div className="mt-8 flex gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="btn btn-ghost h-12 w-12 px-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn btn-ghost h-12 w-12 px-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6.5 8.5A1.75 1.75 0 1 1 6.5 5a1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.8v1.3c.4-.8 1.5-1.5 3-1.5 3.1 0 3.7 2 3.7 4.6V19h-3v-4c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1V19h-3v-9Z" /></svg>
              </a>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
