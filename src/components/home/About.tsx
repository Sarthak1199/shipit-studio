import Image from "next/image";
import { site } from "@/data/site";
import { Reveal, Item } from "@/components/Reveal";
import SectionCTA from "@/components/SectionCTA";

export default function About() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <Item><p className="eyebrow">About</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,6vw,4.4rem)]">Hi, I&apos;m <em>Sarthak</em></h2></Item>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-start">
          <Reveal className="md:col-span-4">
            <Item>
              <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-[28px] bg-surface2 shadow-soft md:mx-0">
                {/* 400px source photo — kept at ≤320px so it stays crisp */}
                <Image src={site.founderPhoto} alt="Sarthak, Founder of ShipIt Studio" fill sizes="320px" className="object-cover" />
                <p className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/30 bg-white/75 px-4 py-2.5 font-display text-base backdrop-blur-md">Sarthak, <em>Founder</em></p>
              </div>
            </Item>
          </Reveal>
          <Reveal className="md:col-span-8">
            <Item>
              <p className="max-w-2xl text-[17px] leading-relaxed text-ink/85 sm:text-lg">
                Bachelors of Engineering in Instrumentation &amp; Control, NSIT. Led multiple consumer products and Zomato Gold for its 23M users, working closely with Zomato&apos;s AI/ML team. Then moved to B2B, building restaurant-tech and CRM systems at DotPe.
              </p>
            </Item>
            <Item>
              <div className="mt-6 flex flex-wrap gap-3">
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
            <Item><SectionCTA className="mt-8 sm:justify-start" label="Talk to me directly." /></Item>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
