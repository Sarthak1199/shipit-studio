import Image from "next/image";
import { Reveal, Item } from "@/components/Reveal";

const testimonials = [
  {
    quote: "Sarthak is one of the smartest minds I've come across. He worked relentlessly to deeply understand our problems and I was shocked how quickly he was able to solve them.",
    name: "Sahil",
    role: "Co-founder, MyMuse",
    photo: "/media/people/sahil.jpg",
  },
  {
    quote: "Inwarding inventory used to mean paperwork, re-checking and mistakes that quietly cost us money. ShipIt Studio replaced the manual work with one clean flow. Fewer errors, a lot less effort, and real savings on our stock costs.",
    name: "Ayush Melwani",
    role: "Cofounder, Lexi's Gourmet Sandwiches",
    photo: "/media/people/ayush.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Testimonials</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">In their <em>words.</em></h2></Item>
        </Reveal>
        <Reveal className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2" amount={0.2}>
          {testimonials.map((t) => (
            <Item key={t.name} className="h-full">
              <figure className="card flex h-full flex-col items-center p-8 text-center sm:p-9">
                <Image src={t.photo} alt={t.name} width={72} height={72} className="h-16 w-16 rounded-full object-cover shadow-soft" />
                <blockquote className="mt-6 font-display text-lg leading-snug sm:text-xl">{t.quote}</blockquote>
                <figcaption className="mt-auto pt-6">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
