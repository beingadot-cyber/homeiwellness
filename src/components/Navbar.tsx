import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { greetingMessage, PHONE_DISPLAY, PHONE_LINK, waMe } from "../lib/whatsapp";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Path", href: "#path" },
  { label: "Remedies", href: "#remedies" },
  { label: "Why Us", href: "#why" },
  { label: "Voices", href: "#voices" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-dark shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]" : "bg-transparent"
      )}
    >
      <div className={cn("h-0.5 w-full bg-gradient-to-r from-transparent via-gold-500/70 to-transparent transition-opacity", scrolled ? "opacity-100" : "opacity-0")} />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-saffron-400 via-saffron-500 to-ember-600 shadow-[0_8px_24px_-6px_rgba(245,118,11,0.7)] ring-1 ring-gold-300/60 transition-transform duration-500 group-hover:rotate-6">
            <span className="font-dev text-base font-bold leading-none text-cream drop-shadow">ॐ</span>
            <span className="absolute inset-0 rounded-2xl ring-2 ring-gold-300/0 transition group-hover:ring-gold-300/60" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-black tracking-wide text-cream drop-shadow-sm sm:text-2xl">
              HOMEI
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.42em] text-gold-300">
              Wellness
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[13px] font-semibold uppercase tracking-[0.18em] text-cream/85 transition hover:text-gold-300"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_LINK}
            className="grid size-10 place-items-center rounded-full border border-cream/25 text-cream/90 transition hover:border-gold-400 hover:text-gold-300"
            aria-label="Call us"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={waMe(greetingMessage())}
            target="_blank"
            rel="noreferrer"
            className="btn-shine group flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-wider text-cream shadow-[0_10px_30px_-8px_rgba(245,118,11,0.8)] ring-1 ring-gold-300/50 transition hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="size-4" />
            Free Consult
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-xl border border-cream/25 text-cream lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="glass-dark overflow-hidden border-t border-gold-500/15 lg:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cream/90 transition hover:bg-saffron-500/15 hover:text-gold-300"
                >
                  {l.label}
                  <span className="font-dev text-gold-400">॥</span>
                </motion.a>
              ))}
              <div className="flex gap-3 pt-4">
                <a
                  href={PHONE_LINK}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/40 px-4 py-3 text-sm font-bold text-gold-300"
                >
                  <Phone className="size-4" /> {PHONE_DISPLAY}
                </a>
                <a
                  href={waMe(greetingMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 px-4 py-3 text-sm font-bold text-cream"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
