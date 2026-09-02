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
          <Item>
            <h2 className="h-display mt-4 text-[clamp(2rem,4.5vw,3.4rem)]">As seen on{" "}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="italic text-leaf underline decoration-1 underline-offset-8 hover:decoration-2">@{site.instagramHandle}</a>
            </h2>
          </Item>
          <Item><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">Follow the build →</a></Item>
        </Reveal>
        <div className="hide-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {reels.map((r) => (
            <div key={r.permalink} className="w-[82vw] shrink-0 snap-center overflow-hidden rounded-[20px] border border-line bg-white shadow-soft sm:w-[340px] md:w-auto">
              <InstagramEmbed permalink={r.permalink} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
