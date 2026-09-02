import { reels } from "@/data/reels";
import { site } from "@/data/site";
import InstagramEmbed from "@/components/InstagramEmbed";
import { Reveal, Item } from "@/components/Reveal";

export default function Reels() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Item><p className="eyebrow">Instagram</p></Item>
            <Item>
              <h2 className="h-display mt-4 text-[clamp(2rem,5.5vw,4.25rem)]">
                As seen on{" "}
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="font-serif font-normal italic text-pop underline decoration-1 underline-offset-8 hover:decoration-2">@{site.instagramHandle}</a>
              </h2>
            </Item>
          </div>
          <Item><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Follow the build →</a></Item>
        </Reveal>
      </div>
      <div className="mt-10 md:mt-14">
        <div className="container-x">
          <div className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {reels.map((r, i) => (
              <div key={i} className="w-[82vw] shrink-0 snap-center sm:w-[360px] md:w-auto">
                {r.permalink ? (
                  <InstagramEmbed permalink={r.permalink} />
                ) : (
                  <a
                    href={site.instagram} target="_blank" rel="noopener noreferrer"
                    className="card noise group flex aspect-[9/16] max-h-[560px] flex-col justify-between overflow-hidden p-6"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{r.label}</span>
                    <div>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pop text-bg transition-transform group-hover:scale-110">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <p className="font-display text-xl font-extrabold">Watch on Instagram</p>
                      <p className="mt-1 text-sm text-muted">Reel link pending — opens the profile.</p>
                    </div>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
