import { reels } from "@/data/reels";
import { site } from "@/data/site";
import InstagramEmbed from "@/components/InstagramEmbed";
import { Reveal, Item } from "@/components/Reveal";

export default function Reels() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Instagram</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.9rem)]">We build in public.<br /><em>Come watch.</em></h2></Item>
          <Item><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">@{site.instagramHandle} →</a></Item>
        </Reveal>
        <div className="hide-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {reels.map((r) => (
            <div key={r.permalink} className="relative w-[82vw] shrink-0 snap-center overflow-hidden rounded-[20px] border border-line bg-white shadow-soft sm:w-[340px] md:w-auto">
              {r.views && (
                <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1 text-[12px] font-medium text-white backdrop-blur">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>{r.views} views
                </span>
              )}
              <InstagramEmbed permalink={r.permalink} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
