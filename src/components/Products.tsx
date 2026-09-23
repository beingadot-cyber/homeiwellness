import { motion } from "framer-motion";
import { FlaskConical, MessageCircle, Sparkles } from "lucide-react";
import { PRODUCTS } from "../lib/data";
import { greetingMessage, orderMessage, waMe } from "../lib/whatsapp";
import { Reveal, SectionHeading } from "./Reveal";

export default function Products() {
  return (
    <section
      id="remedies"
      className="noise relative overflow-hidden bg-gradient-to-b from-maroon-900 via-maroon-950 to-maroon-900 py-24 sm:py-32"
    >
      {/* ambience */}
      <span className="pointer-events-none absolute -top-32 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-saffron-600/15 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 right-0 select-none font-dev text-[14rem] leading-none text-cream/[0.035]">
        औषधि
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="The Sacred Remedies"
          title={
            <>
              Seven Nectars of <span className="text-gold-grad">Swasthya</span>
            </>
          }
          sub="Handcrafted homeopathic formulations for the whole family — each bottled with purity, prayer and precision. Tap any remedy to order instantly on WhatsApp."
        />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={(i % 4) * 0.08}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 xl:col-span-1" : ""}
            >
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-gradient-to-b from-gold-300/90 via-gold-500/70 to-saffron-700/80 p-[1.5px] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.65)]"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.6rem-1.5px)] bg-maroon-900">
                  {/* image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.name} — ${p.tag}`}
                      loading="lazy"
                      className="aspect-[4/3.4] w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-900 via-maroon-900/10 to-transparent" />
                    {/* shine sweep */}
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[160%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[1.1s] ease-out group-hover:translate-x-[420%]" />
                    {p.badge && (
                      <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-cream shadow-lg ring-1 ring-gold-300/60">
                        {p.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-4 rounded-full border border-cream/25 bg-maroon-950/55 px-3 py-1 font-dev text-xs text-gold-300 backdrop-blur-md">
                      {p.sanskrit}
                    </span>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-1">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-saffron-400">
                      {p.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-black text-cream">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-cream/65">{p.desc}</p>
                    <p className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-gold-300/85">
                      <Sparkles className="size-3.5 shrink-0" />
                      {p.ingredients}
                    </p>

                    <div className="mt-4 flex items-end justify-between border-t border-cream/10 pt-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-cream/45">
                          Launch Price
                        </p>
                        <p className="font-display text-2xl font-black text-gold-grad">
                          ₹{p.price}
                          <span className="ml-2 align-middle text-sm font-medium text-cream/40 line-through">
                            ₹{p.mrp}
                          </span>
                        </p>
                      </div>
                      <span className="rounded-lg bg-jungle/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-300 ring-1 ring-green-400/30">
                        {Math.round(((p.mrp - p.price) / p.mrp) * 100)}% Off
                      </span>
                    </div>

                    <a
                      href={waMe(orderMessage(p.name, p.tag, p.price))}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-shine mt-4 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-cream shadow-[0_14px_35px_-10px_rgba(245,118,11,0.8)] ring-1 ring-gold-300/50 transition-all hover:scale-[1.03] active:scale-95"
                    >
                      <MessageCircle className="size-4" />
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}

          {/* 8th cell — custom remedy CTA */}
          <Reveal delay={0.24}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.6rem] border-2 border-dashed border-gold-500/45 bg-gradient-to-b from-maroon-800/60 to-maroon-950/80 p-8 text-center"
            >
              <span className="animate-sun absolute -top-16 left-1/2 size-44 -translate-x-1/2 rounded-full bg-gold-500/25 blur-3xl" />
              <span className="relative grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-saffron-500/20 to-gold-500/20 text-gold-400 ring-1 ring-gold-500/40">
                <FlaskConical className="size-8" />
              </span>
              <h3 className="relative mt-5 font-display text-2xl font-black text-cream">
                Need a <span className="text-gold-grad">Personalised</span> Remedy?
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cream/65">
                Every constitution is unique. Consult our homeopathy doctor and receive a remedy crafted for
                <span className="font-alt italic text-gold-300"> your </span>prakriti.
              </p>
              <p className="relative mt-4 font-dev text-lg text-gold-300">॥ यथा पिण्डे तथा ब्रह्माण्डे ॥</p>
              <a
                href={waMe(greetingMessage())}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 flex items-center gap-2.5 rounded-full border-2 border-gold-500/60 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-gold-300 transition-all hover:bg-gold-500 hover:text-maroon-950 active:scale-95"
              >
                <MessageCircle className="size-4" />
                Consult Free
              </a>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
