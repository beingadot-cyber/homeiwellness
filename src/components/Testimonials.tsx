import { MapPin, Quote, Star } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "../lib/data";
import { SectionHeading } from "./Reveal";
import { cn } from "../utils/cn";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="relative w-[19rem] shrink-0 rounded-3xl border border-saffron-600/15 bg-white/85 p-6 shadow-[0_18px_45px_-20px_rgba(64,22,9,0.35)] backdrop-blur sm:w-[22rem]">
      <Quote className="absolute right-5 top-5 size-8 text-saffron-500/15" />
      <span className="absolute left-6 top-0 h-1 w-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-saffron-500 to-gold-500" />
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < t.rating ? "fill-gold-500 text-gold-500" : "fill-maroon-200 text-maroon-200"
            )}
          />
        ))}
      </div>
      <blockquote className="mt-4 min-h-[7.5rem] text-[13.5px] leading-relaxed text-maroon-800/90">
        “{t.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-saffron-600/20 pt-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-ember-600 font-display text-base font-black text-cream ring-2 ring-gold-400/60">
          {t.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-maroon-900">
            {t.name}
            <span className="ml-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-maroon-700/60">
              <MapPin className="size-3" />
              {t.loc}
            </span>
          </p>
          <p className="mt-0.5 text-[11px] font-bold uppercase tracking-wider text-saffron-600">
            {t.concern}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rowA = TESTIMONIALS.slice(0, 4);
  const rowB = TESTIMONIALS.slice(4);

  return (
    <section id="voices" className="relative overflow-hidden bg-cream pb-24 pt-4 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voices of the Healed"
          title={
            <>
              Stories Written by <span className="text-gold-grad">Recovery</span>
            </>
          }
          sub="Real patients. Real transformations. Word of mouth has built our little temple of healing."
        />
      </div>

      {/* row A — left */}
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-32" />
        <div className="animate-marquee-slow flex w-max gap-6 py-3 [will-change:transform] group-hover:[animation-play-state:paused]">
          {[...rowA, ...rowA, ...rowA, ...rowA].map((t, i) => (
            <Card key={`a-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* row B — right */}
      <div className="group relative mt-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent sm:w-32" />
        <div className="animate-marquee-rev flex w-max gap-6 py-3 [will-change:transform] group-hover:[animation-play-state:paused]">
          {[...rowB, ...rowB, ...rowB, ...rowB].map((t, i) => (
            <Card key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-maroon-700/50">
        Hover to pause & read · 15,000+ such stories
      </p>
    </section>
  );
}
