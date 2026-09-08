import Image from "next/image";
import { Reveal, Item } from "@/components/Reveal";

const testimonial = {
  quote: "Sarthak is one of the smartest minds I've come across. He worked relentlessly to deeply understand our problems and I was shocked how quickly he was able to solve them.",
  name: "Sahil",
  role: "Co-founder, MyMuse",
  photo: "/media/people/sahil.jpg",
};

export default function Testimonials() {
  return (
    <section className="section border-t border-line">
      <div className="container-x">
        <Reveal className="text-center">
          <Item><p className="eyebrow">Testimonials</p></Item>
          <Item><h2 className="h-display mt-4 text-[clamp(2.2rem,5vw,3.6rem)]">In their <em>words.</em></h2></Item>
        </Reveal>
        <Reveal className="mt-10 flex justify-center" amount={0.3}>
          <Item className="w-full max-w-2xl">
            <figure className="card flex flex-col items-center p-8 text-center sm:p-10">
              <Image src={testimonial.photo} alt={testimonial.name} width={72} height={72} className="h-16 w-16 rounded-full object-cover shadow-soft" />
              <blockquote className="mt-6 font-display text-xl leading-snug sm:text-2xl">{testimonial.quote}</blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{testimonial.name}</span>
                <span className="block text-sm text-muted">{testimonial.role}</span>
              </figcaption>
            </figure>
          </Item>
        </Reveal>
      </div>
    </section>
  );
}
