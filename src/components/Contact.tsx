import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarClock,
  ChevronDown,
  Clock,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "../lib/data";
import {
  consultMessage,
  greetingMessage,
  parseWhatsApp,
  PHONE_DISPLAY,
  PHONE_LINK,
  waMe,
  type ConsultData,
} from "../lib/whatsapp";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "../utils/cn";

/* ================= CTA BANNER ================= */
export function CtaBanner() {
  return (
    <section className="noise relative overflow-hidden bg-gradient-to-br from-saffron-500 via-ember-500 to-saffron-600 py-20 sm:py-24">
      <span className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 select-none font-dev text-[11rem] leading-none text-cream/10">
        राम
      </span>
      <span className="pointer-events-none absolute -right-16 -top-16 size-80 rounded-full bg-gold-300/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="font-dev text-xl text-cream/90">॥ स्वस्थ भव, आनंद भव ॥</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.06] tracking-tight text-cream drop-shadow-[0_8px_30px_rgba(64,22,9,0.5)] sm:text-5xl lg:text-6xl">
            Your Body Already Knows
            <br />
            How to Heal. <span className="text-gold-grad">Let Us Guide It.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            One free consultation can change the course of your health. No obligation — only shraddha
            and honest guidance.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waMe(greetingMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn-shine flex w-full items-center justify-center gap-3 rounded-full bg-maroon-950 px-9 py-4 text-sm font-extrabold uppercase tracking-[0.15em] text-gold-300 shadow-[0_20px_50px_-14px_rgba(29,8,2,0.9)] ring-2 ring-gold-300/70 transition-all hover:scale-[1.05] active:scale-95 sm:w-auto"
            >
              <MessageCircle className="size-5" />
              Claim Free Consultation
            </a>
            <a
              href={PHONE_LINK}
              className="flex w-full items-center justify-center gap-3 rounded-full border-2 border-cream/80 px-9 py-[14px] text-sm font-extrabold uppercase tracking-[0.15em] text-cream transition-all hover:bg-cream hover:text-saffron-700 active:scale-95 sm:w-auto"
            >
              <Phone className="size-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const FAQS = [
  {
    q: "Are homeopathic remedies safe for children and elders?",
    a: "Absolutely. Our dilutions are gentle, non-toxic and free from side effects — safe from infants to grandparents, and alongside most ongoing medicines.",
  },
  {
    q: "How does the free WhatsApp consultation work?",
    a: "Simply send us a message describing your concern. Our homeopathy doctor will reply with questions about your prakriti and history, then recommend the right remedy and dosage — all free of cost.",
  },
  {
    q: "How long until I see results?",
    a: "Acute issues often ease within days; chronic conditions usually show steady improvement in 4–12 weeks, because we heal the root cause, not just the symptoms.",
  },
  {
    q: "Do you deliver outside my city?",
    a: "Yes! We ship remedies safely and quickly across all of India, with clear usage guidance on WhatsApp and follow-up support from our team.",
  },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div
          key={f.q}
          className={cn(
            "overflow-hidden rounded-2xl border transition-colors",
            open === i ? "border-gold-500/45 bg-cream/[0.07]" : "border-cream/12 bg-cream/[0.04]"
          )}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="text-sm font-bold text-cream">{f.q}</span>
            <span
              className={cn(
                "grid size-7 shrink-0 place-items-center rounded-full transition-all",
                open === i ? "bg-gold-500 text-maroon-950" : "bg-cream/10 text-gold-300"
              )}
            >
              {open === i ? <Minus className="size-4" /> : <ChevronDown className="size-4" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="px-5 pb-5 text-sm leading-relaxed text-cream/70">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ================= WhatsApp bubble renderer ================= */
function WaText({ raw }: { raw: string }) {
  const parts = useMemo(() => parseWhatsApp(raw), [raw]);
  return (
    <p className="whitespace-pre-line text-[12.5px] leading-[1.55] text-[#111b21]">
      {parts.map((c, i) =>
        c.kind === "bold" ? (
          <b key={i}>{c.value}</b>
        ) : c.kind === "italic" ? (
          <i key={i}>{c.value}</i>
        ) : c.kind === "mono" ? (
          <span key={i} className="font-mono text-[10.5px] leading-[1.6] text-[#0b141a]">
            {c.value}
          </span>
        ) : (
          <span key={i}>{c.value}</span>
        )
      )}
    </p>
  );
}

/* ================= CONTACT ================= */
const CONCERNS = [
  "Low Immunity",
  "Hair Fall",
  "Digestion / Acidity",
  "Joint & Body Pain",
  "Skin Problems",
  "Stress & Sleep",
  "Low Energy",
  "Other Concern",
];

const TIMES = ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)", "Anytime"];

const inputCls =
  "w-full rounded-xl border border-maroon-900/15 bg-white/80 px-4 py-3.5 text-sm font-medium text-maroon-900 placeholder-maroon-700/40 outline-none transition focus:border-saffron-500 focus:ring-2 focus:ring-saffron-500/30";

export default function Contact() {
  const [form, setForm] = useState<ConsultData>({
    name: "",
    phone: "",
    city: "",
    product: "",
    concern: "",
    time: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof ConsultData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const preview = useMemo(() => consultMessage(form), [form]);
  const valid = form.name.trim().length > 1 && form.phone.trim().length >= 10;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    window.open(waMe(consultMessage(form)), "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const now = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <section id="contact" className="noise relative overflow-hidden bg-maroon-950 py-24 sm:py-32">
      <span className="pointer-events-none absolute -top-24 right-1/4 size-[30rem] rounded-full bg-saffron-600/12 blur-3xl" />
      <span className="pointer-events-none absolute bottom-10 left-0 select-none font-dev text-[13rem] leading-none text-cream/[0.03]">
        संवाद
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Samvad — Talk to Us"
          title={
            <>
              Begin Your <span className="text-gold-grad">Healing Samvad</span>
            </>
          }
          sub="Fill the sacred form below — your details flow straight to our doctor's WhatsApp, beautifully structured, exactly as previewed live."
        />

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-14">
          {/* ---------- LEFT: info + faq ---------- */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Phone,
                  label: "Call the Doctor",
                  value: PHONE_DISPLAY,
                  href: PHONE_LINK,
                  hint: "All Days · 9:31 AM – 5:31 PM",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp Us",
                  value: "Replies within minutes",
                  href: waMe(greetingMessage()),
                  hint: "Fastest way to reach us",
                },
                {
                  icon: Clock,
                  label: "Clinic Hours",
                  value: "9:31 AM – 5:31 PM",
                  hint: "Open All Days",
                },
                {
                  icon: MapPin,
                  label: "Seva Kshetra",
                  value: "Serving all India",
                  hint: "Online consults · Pan-India",
                },
              ].map((c) => {
                const inner = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-ember-600 text-cream shadow-lg ring-1 ring-gold-300/50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-extrabold uppercase tracking-[0.22em] text-gold-400/90">
                        {c.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-bold text-cream">{c.value}</span>
                      <span className="block text-[11px] text-cream/50">{c.hint}</span>
                    </span>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-cream/12 bg-cream/[0.05] p-4 transition-all hover:border-gold-500/50 hover:bg-cream/[0.09]"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={c.label}
                    className="group flex items-center gap-4 rounded-2xl border border-cream/12 bg-cream/[0.05] p-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            <Reveal>
              <h3 className="flex items-center gap-3 font-display text-xl font-bold text-cream">
                <Sparkles className="size-5 text-gold-400" />
                Gentle Answers
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <Faq />
            </Reveal>
          </div>

          {/* ---------- RIGHT: form + live preview ---------- */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-gold-300 via-gold-500 to-saffron-700 p-[1.5px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
              <div className="grid gap-0 rounded-[calc(2rem-1.5px)] bg-cream">
                <div className="grid md:grid-cols-[1.05fr_0.95fr]">
                  {/* FORM */}
                  <form onSubmit={submit} className="relative p-6 sm:p-8">
                    <h3 className="font-display text-2xl font-black text-maroon-900">
                      Free Consultation Form
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-maroon-700/70">
                      Watch your WhatsApp message come alive on the right as you type.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                            Your Name *
                          </label>
                          <input className={inputCls} placeholder="e.g. Rahul Sharma" value={form.name} onChange={set("name")} />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                            Mobile Number *
                          </label>
                          <input className={inputCls} placeholder="10-digit number" inputMode="numeric" value={form.phone} onChange={set("phone")} />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                            City
                          </label>
                          <input className={inputCls} placeholder="e.g. Indore" value={form.city} onChange={set("city")} />
                        </div>
                        <div>
                          <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                            Best Time to Call
                          </label>
                          <select className={inputCls} value={form.time} onChange={set("time")}>
                            <option value="">Select…</option>
                            {TIMES.map((t) => (
                              <option key={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                          Health Concern
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {CONCERNS.map((c) => (
                            <button
                              type="button"
                              key={c}
                              onClick={() => setForm((f) => ({ ...f, concern: f.concern === c ? "" : c }))}
                              className={cn(
                                "rounded-full border px-3.5 py-1.5 text-[11.5px] font-bold transition-all",
                                form.concern === c
                                  ? "border-saffron-600 bg-gradient-to-r from-saffron-500 to-ember-600 text-cream shadow-md"
                                  : "border-maroon-900/15 bg-white/70 text-maroon-800 hover:border-saffron-500/60 hover:text-saffron-700"
                              )}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                          Interested Remedy
                        </label>
                        <select className={inputCls} value={form.product} onChange={set("product")}>
                          <option value="">Not sure — need guidance</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.name} value={`${p.name} (${p.tag})`}>
                              {p.name} — {p.tag}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-1.5 block text-[11px] font-extrabold uppercase tracking-wider text-maroon-800">
                          Your Message
                        </label>
                        <textarea
                          rows={3}
                          className={cn(inputCls, "resize-none")}
                          placeholder="Share anything else — since when, what you have tried…"
                          value={form.message}
                          onChange={set("message")}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={!valid}
                        className={cn(
                          "btn-shine group flex w-full items-center justify-center gap-3 rounded-full py-4 text-sm font-extrabold uppercase tracking-[0.16em] transition-all active:scale-95",
                          valid
                            ? "bg-gradient-to-r from-[#1faa53] to-[#128C7E] text-cream shadow-[0_18px_45px_-12px_rgba(18,140,126,0.7)] ring-1 ring-green-300/60 hover:scale-[1.02]"
                            : "cursor-not-allowed bg-maroon-900/15 text-maroon-900/40"
                        )}
                      >
                        {sent ? (
                          <>
                            <BadgeCheck className="size-5" /> Opening WhatsApp…
                          </>
                        ) : (
                          <>
                            <Send className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                            Send to WhatsApp
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] font-semibold text-maroon-700/55">
                        Your message opens directly in WhatsApp — nothing is stored.
                      </p>
                    </div>
                  </form>

                  {/* LIVE PREVIEW */}
                  <div className="relative border-t border-maroon-900/10 bg-maroon-900/95 p-5 sm:p-6 md:border-l md:border-t-0">
                    <div className="sticky top-24">
                      <p className="mb-3 flex items-center justify-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold-400">
                        <span className="size-1.5 animate-pulse rounded-full bg-[#25D366]" />
                        Live WhatsApp Preview
                      </p>

                      {/* phone */}
                      <div className="mx-auto max-w-[21rem] overflow-hidden rounded-[1.8rem] border border-cream/15 bg-[#0b141a] shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)]">
                        {/* header */}
                        <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
                          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-saffron-400 to-ember-600 font-dev text-sm font-bold text-cream">
                            राम
                          </span>
                          <div className="flex-1 leading-tight">
                            <p className="text-[13px] font-bold text-[#e9edef]">HOMEI Wellness</p>
                            <p className="text-[10.5px] text-[#8696a0]">
                              <span className="text-[#25D366]">● online</span> · typically replies instantly
                            </p>
                          </div>
                          <Phone className="size-4 text-[#8696a0]" />
                          <MessageCircle className="size-4 text-[#8696a0]" />
                        </div>

                        {/* chat body */}
                        <div className="wa-doodle max-h-[26rem] min-h-[20rem] overflow-y-auto px-3 py-4">
                          <div className="mx-auto mb-3 w-max rounded-lg bg-[#fdf3c6] px-3 py-1 text-[10px] font-semibold text-[#54656f] shadow-sm">
                            TODAY
                          </div>

                          {/* outgoing bubble */}
                          <div className="relative ml-auto w-fit max-w-[92%] rounded-xl rounded-tr-sm bg-[#d9fdd3] px-3 pb-5 pt-2.5 shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
                            <WaText raw={preview} />
                            <span className="absolute bottom-1 right-2 flex items-center gap-1 text-[9.5px] text-[#667781]">
                              {now}
                              <svg viewBox="0 0 16 11" className="size-3.5 fill-[#53bdeb]">
                                <path d="M11.07.65 4.6 7.4 2.05 4.85l-.9.9 3.45 3.45L11.97 1.55zM15.3.65 8.83 7.4l-.82-.83-.9.9 1.72 1.73 7.37-7.65z" />
                              </svg>
                            </span>
                          </div>

                          {/* incoming auto-reply */}
                          <div className="relative mt-2.5 w-fit max-w-[85%] rounded-xl rounded-tl-sm bg-white px-3 pb-2.5 pt-2 shadow-sm">
                            <p className="text-[12px] leading-snug text-[#111b21]">
                              🙏 <b>Namaste{form.name ? ` ${form.name.split(" ")[0]}` : ""} Ji!</b> Dhanyavaad
                              for reaching out — our doctor will reply within minutes. ✨
                            </p>
                            <span className="mt-0.5 block text-right text-[9.5px] text-[#667781]">{now}</span>
                          </div>
                        </div>

                        {/* input bar */}
                        <div className="flex items-center gap-2 bg-[#202c33] px-3 py-2.5">
                          <span className="flex-1 rounded-full bg-[#2a3942] px-4 py-2 text-[11px] text-[#8696a0]">
                            Message
                          </span>
                          <span className="grid size-9 place-items-center rounded-full bg-[#00a884]">
                            <Send className="size-4 text-white" />
                          </span>
                        </div>
                      </div>

                      <p className="mt-4 flex items-center justify-center gap-2 text-center text-[11px] font-semibold text-cream/55">
                        <CalendarClock className="size-3.5 text-gold-400" />
                        This exact structure reaches our WhatsApp — aligned, complete, alive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
