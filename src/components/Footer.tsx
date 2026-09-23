import { ArrowUpRight, Flame, MessageCircle, Phone } from "lucide-react";
import { PRODUCTS } from "../lib/data";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
import {
  greetingMessage,
  orderMessage,
  PHONE_DISPLAY,
  PHONE_LINK,
  waMe,
} from "../lib/whatsapp";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "Our Path", href: "#path" },
  { label: "Sacred Remedies", href: "#remedies" },
  { label: "Why Us", href: "#why" },
  { label: "Voices of Healing", href: "#voices" },
  { label: "Contact & Consult", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-maroon-950 pb-24 pt-16 sm:pb-16 lg:pb-0">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-saffron-400 via-saffron-500 to-ember-600 shadow-lg ring-1 ring-gold-300/60">
                <span className="font-dev text-xl font-bold text-cream">राम</span>
              </span>
              <span>
                <span className="block font-display text-2xl font-black text-cream">HOMEI</span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.42em] text-gold-400">
                  Wellness
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              A humble temple of healing — where classical homeopathy meets Sanatan wisdom. Serving
              families across India with purity, patience and prayer.
            </p>
            <p className="mt-4 font-dev text-lg text-gold-300">॥ सर्वे सन्तु निरामयाः ॥</p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: InstagramIcon, href: "https://instagram.com" },
                { icon: FacebookIcon, href: "https://facebook.com" },
                { icon: YoutubeIcon, href: "https://youtube.com" },
                { icon: MessageCircle, href: waMe(greetingMessage()) },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all hover:-translate-y-1 hover:border-gold-500 hover:bg-saffron-500/15 hover:text-gold-300"
                >
                  <s.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
              <Flame className="size-4 animate-flicker" /> Quick Darshan
            </h4>
            <ul className="mt-5 space-y-2.5">
              {QUICK.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-cream/60 transition hover:text-gold-300"
                  >
                    <span className="h-px w-3 bg-gold-500/50 transition-all group-hover:w-5 group-hover:bg-gold-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* remedies */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
              <Flame className="size-4 animate-flicker" /> Sacred Remedies
            </h4>
            <ul className="mt-5 space-y-2.5">
              {PRODUCTS.map((p) => (
                <li key={p.name}>
                  <a
                    href={waMe(orderMessage(p.name, p.tag, p.price))}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-cream/60 transition hover:text-gold-300"
                  >
                    {p.name}
                    <ArrowUpRight className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.24em] text-gold-400">
              <Flame className="size-4 animate-flicker" /> Reach the Doctor
            </h4>
            <a
              href={PHONE_LINK}
              className="mt-5 block rounded-2xl border border-gold-500/30 bg-gradient-to-br from-saffron-500/15 to-transparent p-4 transition hover:border-gold-500/60"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400/80">
                <Phone className="size-3.5" /> Call / WhatsApp
              </p>
              <p className="mt-1.5 font-display text-2xl font-black text-cream">{PHONE_DISPLAY}</p>
              <p className="mt-1 text-[11px] text-cream/50">Mon–Sat · 9 AM – 8 PM · All India</p>
            </a>
            <a
              href={waMe(greetingMessage())}
              target="_blank"
              rel="noreferrer"
              className="btn-shine mt-4 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-cream shadow-[0_14px_35px_-12px_rgba(245,118,11,0.8)] ring-1 ring-gold-300/50 transition hover:scale-[1.02]"
            >
              <MessageCircle className="size-4" /> Free Consultation
            </a>
          </div>
        </div>

        {/* watermark */}
        <p className="pointer-events-none mt-14 select-none text-center font-display text-[16vw] font-black leading-[0.85] text-cream/[0.04] lg:text-[9rem]">
          HOMEI
        </p>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} HOMEI Wellness. All rights reserved. Made with devotion in Bharat.
          </p>
          <p className="flex items-center gap-2 text-xs text-cream/45">
            <span className="font-dev text-gold-500">॥</span>
            Swasth Parivaar, Sashakt Bharat
            <span className="font-dev text-gold-500">॥</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
