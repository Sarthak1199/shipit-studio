import { site } from "@/data/site";
import { Reveal, Item } from "@/components/Reveal";

export default function About() {
  return (
    <section className="section border-t border-line">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <Item><p className="eyebrow">About</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.6rem,8vw,6rem)]">Hi, I&apos;m <span className="font-serif font-normal italic text-pop">Sarthak</span></h2></Item>
          <Item><p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/85">Product Manager building AI tools and automations, from CRM systems to restaurant analytics at DotPe.</p></Item>
          <Item>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">@{site.instagramHandle}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Say hi on WhatsApp</a>
            </div>
          </Item>
        </Reveal>
        <Reveal className="md:col-span-5 md:pt-16">
          <Item>
            <div className="card noise p-7">
              <p className="eyebrow">Credit</p>
              {/* Credit line carried over from the reference site */}
              <p className="mt-3 font-display text-xl font-bold">Ikta Sollork</p>
              <p className="text-muted">Social Media Executive</p>
              <div className="mt-6 border-t border-line pt-6 font-mono text-xs leading-relaxed text-muted">
                Built by one person and a lot of AI.<br />That&apos;s the point.
              </div>
            </div>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
