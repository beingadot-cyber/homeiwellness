import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ChevronDown,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { greetingMessage, PHONE_DISPLAY, PHONE_LINK, waMe } from "../lib/whatsapp";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  /* ---------- mouse parallax ---------- */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 32, damping: 15, mass: 0.9 });
  const sy = useSpring(my, { stiffness: 32, damping: 15, mass: 0.9 });

  const handleMouse = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  /* ---------- scroll parallax ---------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgX = useTransform(sx, (v) => v * 12);
  const bgYs = useTransform(scrollYProgress, [0, 1], [0, 190]);
  const bgYm = useTransform(sy, (v) => v * 8);
  const bgY = useTransform([bgYs, bgYm], (v) => (v[0] as number) + (v[1] as number));

  const sunX = useTransform(sx, (v) => v * 20);
  const sunY = useTransform(sy, (v) => v * 14);

  const midX = useTransform(sx, (v) => v * -18);
  const midYs = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const midYm = useTransform(sy, (v) => v * -8);
  const midY = useTransform([midYs, midYm], (v) => (v[0] as number) + (v[1] as number));

  const jgX = useTransform(sx, (v) => v * -34);
  const jgYs = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const jgYm = useTransform(sy, (v) => v * -14);
  const jgY = useTransform([jgYs, jgYm], (v) => (v[0] as number) + (v[1] as number));

  const ctX = useTransform(sx, (v) => v * 16);
  const ctY = useTransform(sy, (v) => v * 12);
  const ctFade = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  const cardX = useTransform(sx, (v) => v * -24);
  const cardYs = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardYm = useTransform(sy, (v) => v * -16);
  const cardY = useTransform([cardYs, cardYm], (v) => (v[0] as number) + (v[1] as number));
  const tiltX = useTransform(sy, [-0.5, 0.5], [8, -8]);
  const tiltY = useTransform(sx, [-0.5, 0.5], [-10, 10]);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        left: (i * 53 + 7) % 96,
        size: 3 + ((i * 7) % 6),
        delay: (i * 1.35) % 9,
        dur: 8 + ((i * 3) % 7),
        glow: i % 3 === 0,
      })),
    []
  );

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative isolate min-h-[100svh] overflow-hidden"
      style={{ perspective: 1200 }}
    >
      {/* ============ LAYER 1 — sky painting ============ */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute -inset-[6%] -z-20">
        <img
          src="/images/hero-bg.jpg"
          alt="Sacred Himalayan sunrise over the jungle"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/45 via-transparent to-transparent" />
      </motion.div>

      {/* ============ LAYER 2 — breathing sun ============ */}
      <motion.div style={{ x: sunX, y: sunY }} className="absolute -z-10 left-[58%] top-[12%]">
        <div className="animate-sun size-[46vmin] rounded-full bg-[radial-gradient(circle,rgba(255,214,130,0.9)_0%,rgba(250,154,46,0.45)_38%,transparent_68%)] blur-2xl" />
      </motion.div>

      {/* clouds */}
      <div className="pointer-events-none absolute inset-x-0 top-[14%] -z-10">
        <div className="animate-drift absolute left-0 h-20 w-[38rem] rounded-full bg-cream/30 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[30%] -z-10">
        <div className="animate-drift-rev absolute left-0 h-16 w-[30rem] rounded-full bg-gold-300/25 blur-3xl" />
      </div>

      {/* birds */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        <svg className="animate-birds absolute left-0 top-[22%] w-40 text-maroon-800/70" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M4 18 Q14 6 24 18 Q34 6 44 18" />
          <path d="M64 10 Q73 0 82 10 Q91 0 100 10" />
          <path d="M116 22 Q124 13 132 22 Q140 13 148 22" />
        </svg>
        <svg className="animate-birds2 absolute left-0 top-[38%] w-28 text-maroon-900/50" viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M10 20 Q20 9 30 20 Q40 9 50 20" />
          <path d="M70 12 Q78 3 86 12 Q94 3 102 12" />
        </svg>
      </div>

      {/* ============ LAYER 3 — misty far ridge ============ */}
      <motion.div style={{ x: midX, y: midY }} className="absolute -inset-x-16 bottom-0 -z-10 hidden md:block">
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className="block h-[30vh] w-[112%]">
          <path
            d="M0,200 L130,118 L270,176 L420,94 L580,172 L720,108 L880,182 L1030,102 L1190,168 L1310,116 L1440,172 L1440,260 L0,260 Z"
            fill="#401609"
            opacity="0.34"
          />
        </svg>
        <div className="absolute bottom-8 left-0 h-16 w-full bg-gradient-to-t from-cream/25 to-transparent blur-xl" />
      </motion.div>

      {/* ============ LAYER 4 — sacred jungle canopy ============ */}
      <motion.div style={{ x: jgX, y: jgY }} className="absolute -inset-x-24 bottom-0 -z-10">
        <svg viewBox="0 0 1600 230" preserveAspectRatio="none" className="block h-[21vh] w-[116%] -translate-x-[4%]">
          <path
            d="M0,230 L0,158 Q45,108 90,146 Q135,96 190,140 Q235,104 290,146 Q340,114 395,148 Q450,96 510,140 Q560,106 625,146 Q680,86 745,136 Q800,100 865,142 Q920,92 985,140 Q1040,106 1105,145 Q1165,94 1230,138 Q1290,110 1350,146 Q1410,96 1475,140 Q1530,112 1600,150 L1600,230 Z"
            fill="#1d1005"
          />
          <path
            d="M0,230 L0,186 Q60,150 130,178 Q210,138 290,176 Q370,142 450,180 Q540,140 620,178 Q700,146 790,182 Q870,144 950,180 Q1040,142 1120,180 Q1200,148 1290,182 Q1380,146 1460,180 Q1530,156 1600,184 L1600,230 Z"
            fill="#140a03"
          />
        </svg>
      </motion.div>

      {/* rising golden dust */}
      <div className="pointer-events-none absolute inset-0 -z-[5] hidden sm:block">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-rise absolute bottom-[6vh] rounded-full"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              background: p.glow ? "#f6d98a" : "#fdbb63",
              boxShadow: p.glow ? "0 0 14px 3px rgba(246,217,138,0.75)" : "0 0 8px 1px rgba(253,187,99,0.5)",
            }}
          />
        ))}
      </div>

      {/* bottom fade into marquee band */}
      <div className="absolute inset-x-0 bottom-0 z-[5] h-40 bg-gradient-to-b from-transparent to-maroon-950" />

      {/* ============ CONTENT ============ */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-28 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24 lg:pt-24">
        {/* ----- copy ----- */}
        <motion.div style={{ x: ctX, y: ctY, opacity: ctFade }} className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cream/35 bg-maroon-950/35 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles className="size-3.5 text-gold-300" />
            <span className="font-dev text-sm text-gold-300">॥ आरोग्यम् परमं भाग्यम् ॥</span>
            <Sparkles className="size-3.5 text-gold-300" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="mt-6 font-display text-[clamp(2.6rem,7.4vw,5.3rem)] font-black leading-[1.02] tracking-tight text-cream drop-shadow-[0_6px_30px_rgba(29,8,2,0.65)]"
          >
            Ancient Healing
            <br />
            for the{" "}
            <span className="text-gold-grad">
              Modern&nbsp;Soul
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease: EASE }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 drop-shadow sm:text-lg lg:mx-0"
          >
            Pure, doctor-guided <span className="font-bold text-gold-300">homeopathic remedies</span> born of
            Sanatan wisdom — healing the root cause gently, with zero side effects. Strength of the
            mountains, calm of the <span className="font-alt italic text-gold-200">dharma</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: EASE }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
          >
            <a
              href={waMe(greetingMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group relative flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-saffron-500 via-ember-500 to-saffron-600 px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-cream shadow-[0_18px_50px_-12px_rgba(245,118,11,0.85)] ring-2 ring-gold-300/60 transition-all hover:scale-[1.045] hover:shadow-[0_24px_60px_-10px_rgba(245,118,11,0.9)] active:scale-95 sm:w-auto"
            >
              <MessageCircle className="size-5" />
              Book Free Consultation
            </a>
            <a
              href={PHONE_LINK}
              className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-cream/60 bg-cream/10 px-8 py-[14px] text-sm font-extrabold uppercase tracking-[0.14em] text-cream backdrop-blur-md transition-all hover:border-gold-300 hover:bg-cream/20 hover:text-gold-200 active:scale-95 sm:w-auto"
            >
              <Phone className="size-5 transition group-hover:rotate-12" />
              {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* trust chips */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.78, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {[
              { icon: Star, text: "4.9 Rated by Patients" },
              { icon: ShieldCheck, text: "100% Safe & Natural" },
              { icon: Leaf, text: "Zero Side Effects" },
            ].map((c) => (
              <span
                key={c.text}
                className="flex items-center gap-2 rounded-full border border-cream/30 bg-maroon-950/40 px-4 py-2 text-xs font-bold tracking-wide text-cream/90 backdrop-blur-md"
              >
                <c.icon className="size-3.5 text-gold-300" />
                {c.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ----- Hanuman arch (3D tilt) ----- */}
        <motion.div
          style={{ x: cardX, y: cardY, rotateX: tiltX, rotateY: tiltY, transformPerspective: 1000 }}
          initial={{ opacity: 0, y: 70, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
          className="relative mx-auto w-full max-w-[19rem] sm:max-w-[22rem] lg:max-w-[24rem]"
        >
          {/* halo ring */}
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-[18%]">
            <div className="animate-sun size-[16rem] rounded-full bg-[radial-gradient(circle,rgba(246,217,138,0.55),rgba(250,154,46,0.22)_55%,transparent_72%)] blur-md sm:size-[19rem]" />
          </div>
          <svg
            viewBox="0 0 200 200"
            className="animate-spin-slower absolute -top-10 left-1/2 -z-10 size-40 -translate-x-1/2 text-gold-400/70 sm:size-48"
          >
            <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" />
            <circle cx="100" cy="100" r="74" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="1 6" />
          </svg>

          <div className="animate-float-slow">
            {/* temple arch frame */}
            <div className="arch relative bg-gradient-to-b from-gold-300 via-gold-500 to-saffron-700 p-[5px] shadow-[0_40px_90px_-20px_rgba(29,8,2,0.85)]">
              <div className="arch relative overflow-hidden bg-maroon-950">
                <img
                  src="/images/hanuman.jpg"
                  alt="Lord Hanuman — the eternal symbol of strength, healing and devotion"
                  className="h-[26rem] w-full object-cover object-top transition-transform duration-[2.5s] ease-out hover:scale-105 sm:h-[30rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 pb-5 text-center">
                  <p className="font-dev text-lg text-gold-300">॥ संकटमोचन नमस्तुभ्यम् ॥</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.34em] text-cream/75">
                    Strength · Healing · Bhakti
                  </p>
                </div>
              </div>
              {/* Om medallion */}
              <div className="absolute -top-6 left-1/2 grid size-13 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-saffron-600 p-1 shadow-[0_10px_25px_-6px_rgba(0,0,0,0.55)] ring-2 ring-cream/60">
                <div className="grid size-full place-items-center rounded-full bg-maroon-950">
                  <span className="font-dev text-sm font-bold text-gold-300">राम</span>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.8, ease: EASE }}
              className="absolute -left-6 top-24 sm:-left-12"
            >
              <div className="animate-float glass-light flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-12px_rgba(29,8,2,0.55)] ring-1 ring-gold-500/40">
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-jungle to-[#4a5d23] text-cream">
                  <Leaf className="size-4.5" />
                </span>
                <span className="text-xs font-extrabold leading-tight text-maroon-900">
                  100% Natural
                  <span className="block text-[10px] font-semibold text-maroon-700/70">Pure Homeopathy</span>
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease: EASE }}
              className="absolute -right-4 bottom-24 sm:-right-10"
            >
              <div className="animate-float-fast glass-light flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-[0_16px_40px_-12px_rgba(29,8,2,0.55)] ring-1 ring-gold-500/40">
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-ember-600 text-cream">
                  <ShieldCheck className="size-4.5" />
                </span>
                <span className="text-xs font-extrabold leading-tight text-maroon-900">
                  Zero Side Effects
                  <span className="block text-[10px] font-semibold text-maroon-700/70">Safe for all ages</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#path"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/70 transition hover:text-gold-300 md:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Begin the Journey</span>
        <ChevronDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
