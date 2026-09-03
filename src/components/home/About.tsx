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
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">B.E. in Instrumentation &amp; Control from NSUT (NSIT). Consumer-tech PM who ran Zomato Gold for its 23M-user base alongside Zomato&apos;s AI/ML teams.</p>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/85">Then B2B: restaurant-tech and CRM at DotPe, building the internal tools and automations this studio now ships for others.</p>
          </Item>
          <Item>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-2 text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F2416" strokeWidth="1.9" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="#1F2416" stroke="none" /></svg>
                Instagram
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost gap-2 text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><rect x="2" y="2" width="20" height="20" rx="4" fill="#1F2416" /><path fill="#F5F5F0" d="M7.2 9.4h2.3V17H7.2V9.4Zm1.15-3.6a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM10.9 9.4h2.2v1.05c.35-.65 1.2-1.25 2.45-1.25 2.6 0 3.1 1.7 3.1 3.9V17h-2.3v-3.45c0-.85-.02-1.9-1.2-1.9-1.2 0-1.35.9-1.35 1.85V17h-2.3V9.4Z" /></svg>
                LinkedIn
              </a>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
