import { Award, HeartHandshake, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./Reveal";

const POINTS = [
  {
    icon: Leaf,
    title: "Prakriti-First Remedies",
    text: "Every dilution is sourced from pure herbs and minerals — nothing synthetic, nothing harsh.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Side Effects, Promise",
    text: "Gentle enough for infants, safe for elders. Healing that never harms — that is our dharma.",
  },
  {
    icon: HeartHandshake,
    title: "One-on-One Doctor Guidance",
    text: "No generic pills. Your prakriti, your history, your remedy — personalised on a real consultation.",
  },
  {
    icon: Award,
    title: "Root-Cause Philosophy",
    text: "We don't silence symptoms; we dissolve the imbalance that births them.",
  },
];

export default function About() {
  return (
    <section id="path" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* huge watermark */}
      <span className="pointer-events-none absolute -right-10 top-8 select-none font-dev text-[16rem] leading-none text-stroke-saffron sm:text-[22rem]">
        आयुः
      </span>
      <span className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-saffron-200/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* image side */}
        <div className="relative">
          <Reveal className="relative">
            <div className="arch relative mx-auto max-w-md overflow-hidden border-[6px] border-gold-400/70 shadow-[0_45px_90px_-30px_rgba(64,22,9,0.55)] lg:max-w-none">
              <img
                src="/images/about.jpg"
                alt="Sacred homeopathy apothecary — globules, herbs and brass"
                className="h-[24rem] w-full object-cover transition-transform duration-[2.5s] hover:scale-105 sm:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/45 via-transparent to-transparent" />
            </div>

            {/* rotating badge */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8">
              <div className="animate-float relative grid size-32 place-items-center rounded-full bg-maroon-900 shadow-[0_20px_50px_-12px_rgba(29,8,2,0.8)] ring-2 ring-gold-500/60 sm:size-36">
                <svg viewBox="0 0 100 100" className="animate-spin-slower absolute inset-0 size-full text-gold-400">
                  <defs>
                    <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text fontSize="8.2" letterSpacing="2.6" fill="currentColor" fontWeight="700">
                    <textPath href="#circ">PURE · POTENT · SANATAN · HEALING ·</textPath>
                  </text>
                </svg>
                <span className="text-center font-display text-xl font-black text-gold-grad">
                  12+
                  <span className="block text-[8px] font-bold uppercase tracking-[0.22em] text-cream/70">
                    Years of Seva
                  </span>
                </span>
              </div>
            </div>

            {/* corner chip */}
            <div className="animate-float-slow absolute -top-6 left-2 rounded-2xl bg-gradient-to-br from-saffron-500 to-ember-600 px-5 py-3 shadow-[0_18px_40px_-10px_rgba(245,118,11,0.7)] ring-1 ring-gold-300/60">
              <p className="font-dev text-base leading-none text-cream">शुद्ध · सुरक्षित · संतुलित</p>
            </div>
          </Reveal>
        </div>

        {/* text side */}
        <div>
          <Reveal>
            <Eyebrow>The Sanatan Path</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.08] tracking-tight text-maroon-900 sm:text-5xl">
              Rooted in <span className="text-gold-grad">Dharma.</span>
              <br />
              Perfected by Science.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-maroon-700/85 sm:text-lg">
              For over a decade, <span className="font-bold text-maroon-900">HOMEI Wellness</span> has
              carried forward the healing torch of our rishis — blending classical homeopathy with the
              timeless wisdom of Sanatan traditions. Each remedy is a sankalp: to heal gently, completely,
              and forever.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="group h-full rounded-2xl border border-saffron-600/15 bg-white/70 p-5 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-[0_20px_45px_-18px_rgba(64,22,9,0.4)]">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-saffron-500/15 to-gold-500/20 text-saffron-600 ring-1 ring-saffron-600/20 transition-all duration-500 group-hover:from-saffron-500 group-hover:to-ember-600 group-hover:text-cream">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-maroon-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-maroon-700/75">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-9 flex items-center gap-3 text-maroon-800">
              <Sparkles className="size-5 text-gold-500" />
              <p className="font-dev text-lg">
                ❝ वैद्यो नारायणो हरिः ❞ — <span className="font-alt italic">the healer is divine grace itself</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
