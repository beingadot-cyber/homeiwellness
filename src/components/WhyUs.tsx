import {
  Baby,
  Cross,
  IndianRupee,
  MessageCircle,
  PackageCheck,
  Stethoscope,
  Truck,
} from "lucide-react";
import { greetingMessage, waMe } from "../lib/whatsapp";
import { Reveal, SectionHeading } from "./Reveal";

const FEATURES = [
  {
    icon: Cross,
    title: "Classical Homeopathy",
    text: "Potencies prepared the authentic Hahnemann way — no shortcuts, no compromises.",
  },
  {
    icon: Baby,
    title: "Safe for Every Age",
    text: "From newborns to grandparents — sweet globules that even children ask for.",
  },
  {
    icon: IndianRupee,
    title: "Honest Pricing",
    text: "Premium healing shouldn't cost a fortune. Free consultations, fair prices, always.",
  },
  {
    icon: Truck,
    title: "Free Doorstep Delivery",
    text: "Carefully packed remedies ship across India — healing reaches your doorstep at no extra cost.",
  },
];

const STEPS = [
  {
    icon: MessageCircle,
    num: "०१",
    title: "Share Your Story",
    text: "Message us on WhatsApp. Describe your concern in your own words — we listen with patience.",
  },
  {
    icon: Stethoscope,
    num: "०२",
    title: "Doctor Ji Prescribes",
    text: "Our expert studies your prakriti & history, then selects the precise remedy and dosage.",
  },
  {
    icon: PackageCheck,
    num: "०३",
    title: "Healing Arrives Home",
    text: "Your remedies reach your doorstep with clear guidance — and we walk with you till you're well.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <span className="pointer-events-none absolute -left-20 top-24 select-none font-dev text-[15rem] leading-none text-stroke-saffron">
        चिकित्सा
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Homei Wellness"
          title={
            <>
              Healing with <span className="text-gold-grad">Maryada</span> & Love
            </>
          }
          sub="Thousands trust us not just for remedies — but for the shraddha with which we deliver them."
        />

        {/* feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-saffron-600/15 bg-white/80 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/50 hover:shadow-[0_28px_60px_-22px_rgba(64,22,9,0.45)]">
                <span className="absolute -right-8 -top-8 size-28 rounded-full bg-gradient-to-br from-saffron-400/15 to-gold-500/20 blur-xl transition-all duration-500 group-hover:scale-[1.8]" />
                <span className="absolute -bottom-3 -right-2 select-none font-dev text-5xl text-saffron-500/10 transition-all duration-500 group-hover:text-saffron-500/20">
                  राम
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-300 shadow-lg ring-1 ring-gold-500/40 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <f.icon className="size-6" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-bold text-maroon-900">{f.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-maroon-700/80">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* journey */}
        <div className="mt-24">
          <Reveal className="text-center">
            <h3 className="font-display text-3xl font-black text-maroon-900 sm:text-4xl">
              Your <span className="text-gold-grad">Arogya Yatra</span> in Three Steps
            </h3>
            <p className="mt-3 font-dev text-lg text-saffron-700">॥ स्वस्थस्य स्वास्थ्य रक्षणम् ॥</p>
          </Reveal>

          <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
            {/* connector */}
            <span className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-saffron-600/35 md:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.14}>
                <div className="group relative text-center">
                  <div className="relative mx-auto grid size-20 place-items-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron-500 to-ember-600 opacity-20 blur-md transition-all duration-500 group-hover:opacity-50" />
                    <span className="relative grid size-20 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-ember-600 text-cream shadow-[0_18px_40px_-12px_rgba(245,118,11,0.8)] ring-4 ring-cream transition-transform duration-500 group-hover:scale-110">
                      <s.icon className="size-8" />
                    </span>
                    <span className="absolute -right-2 -top-2 grid size-9 place-items-center rounded-full bg-maroon-900 font-dev text-sm font-bold text-gold-300 ring-2 ring-gold-500/60">
                      {s.num}
                    </span>
                  </div>
                  <h4 className="mt-6 font-display text-xl font-bold text-maroon-900">{s.title}</h4>
                  <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-maroon-700/80">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 text-center">
            <a
              href={waMe(greetingMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn-shine inline-flex items-center gap-3 rounded-full bg-maroon-900 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-gold-300 shadow-[0_20px_50px_-16px_rgba(43,14,4,0.9)] ring-1 ring-gold-500/50 transition-all hover:scale-[1.04] hover:text-gold-200 active:scale-95"
            >
              <MessageCircle className="size-5" />
              Start Step One — It's Free
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
