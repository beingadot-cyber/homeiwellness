import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { Flame } from "lucide-react";
import { Reveal } from "./Reveal";

const PHRASES = [
  "100% Natural Remedies",
  "Zero Side Effects",
  "Root-Cause Healing",
  "Sanatan Wisdom",
  "Doctor-Guided Dosage",
  "Pan-India Doorstep Delivery",
  "Gentle for All Ages",
  "Pure Homeopathy",
];

export function MantraMarquee() {
  const row = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <div className="relative z-10 overflow-hidden border-y border-gold-500/15 bg-maroon-950 py-5">
      <div className="animate-marquee flex w-max items-center">
        {row.map((p, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-sm font-bold uppercase tracking-[0.3em] text-cream/75 sm:text-base">
              {p}
            </span>
            <Flame className="size-4 shrink-0 text-saffron-500" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0</span>;
}

const STATS = [
  { value: 15000, suffix: "+", label: "Patients Healed", dev: "स्वस्थ" },
  { value: 12, suffix: "+", label: "Years of Seva", dev: "सेवा" },
  { value: 98, suffix: "%", label: "Report Real Relief", dev: "आरोग्य" },
  { text: "All India", label: "Doorstep Delivery", dev: "भारत" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-maroon-950 pb-20 pt-14 sm:pb-24">
      {/* watermark */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-dev text-[14rem] leading-none text-cream/[0.03]">
        राम
      </span>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <p className="font-dev text-2xl text-gold-500/70">{s.dev}</p>
            <p className="mt-1 font-display text-4xl font-black text-gold-grad sm:text-5xl lg:text-6xl">
              {"text" in s ? s.text : <Counter to={s.value} suffix={s.suffix} />}
            </p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cream/60 sm:text-xs">
              {s.label}
            </p>
            <span className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
