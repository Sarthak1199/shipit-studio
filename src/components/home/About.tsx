import Image from "next/image";
import { site } from "@/data/site";
import { Reveal, Item } from "@/components/Reveal";

export default function About() {
  return (
    <section className="section border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-7">
          <Item><p className="eyebrow">About</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.4rem,6vw,4.4rem)]">Hi, I&apos;m <em>Sarthak</em></h2></Item>
          <Item><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">Product Manager building AI tools and automations, from CRM systems to restaurant analytics at DotPe.</p></Item>
          <Item>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">@{site.instagramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Say hi on WhatsApp</a>
            </div>
          </Item>
        </Reveal>
        <Reveal className="md:col-span-5">
          <Item>
            <div className="relative overflow-hidden rounded-[28px] shadow-soft">
              <Image src="/media/hills-wide.jpg" alt="" width={1200} height={720} sizes="(max-width: 768px) 100vw, 480px" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-white/70 p-4 backdrop-blur-md">
                <p className="eyebrow">Credit</p>
                {/* Credit line carried over from the reference site */}
                <p className="mt-1 font-display text-lg font-medium">Ikta Sollork</p>
                <p className="text-sm text-muted">Social Media Executive</p>
              </div>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
