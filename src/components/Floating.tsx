import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone, X } from "lucide-react";
import { greetingMessage, PHONE_LINK, waMe } from "../lib/whatsapp";

function WaGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.13 15.07l-.3-.18-3.06.88.9-2.98-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 3.7c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.12.17 1.74 2.78 4.3 3.78 2.13.84 2.56.67 3.02.63.46-.04 1.48-.6 1.69-1.19.2-.58.2-1.08.14-1.19-.06-.1-.23-.17-.48-.29-.25-.12-1.48-.73-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.65.81-.79.98-.14.16-.29.18-.54.06a6.6 6.6 0 0 1-3.3-2.88c-.25-.42.25-.4.72-1.31.08-.16.04-.3-.02-.42-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.46-.01Z" />
    </svg>
  );
}

export default function Floating() {
  const [showTop, setShowTop] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ---------- floating WhatsApp (desktop) ---------- */}
      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <AnimatePresence>
          {openChat && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="mb-4 w-72 overflow-hidden rounded-3xl border border-gold-500/40 bg-maroon-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.75)]"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3.5">
                <span className="grid size-10 place-items-center rounded-full bg-cream/15 font-dev text-lg font-bold text-cream ring-1 ring-cream/40">
                  राम
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-white">HOMEI Wellness</p>
                  <p className="text-[11px] text-cream/80">online · replies instantly</p>
                </div>
                <button onClick={() => setOpenChat(false)} className="ml-auto text-cream/70 hover:text-white">
                  <X className="size-4.5" />
                </button>
              </div>
              <div className="wa-doodle p-3.5">
                <div className="w-fit max-w-full rounded-xl rounded-tl-sm bg-white px-3 py-2.5 text-[12.5px] leading-snug text-[#111b21] shadow-sm">
                  🙏 <b>Namaste Ji!</b> How may we serve your health today? Tap below to start —
                  your message reaches us instantly.
                </div>
                <a
                  href={waMe(greetingMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:brightness-105 active:scale-95"
                >
                  <WaGlyph className="size-4" />
                  Start Sacred Samvad
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpenChat((v) => !v)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260 }}
          className="relative grid size-16 place-items-center rounded-full bg-gradient-to-br from-[#2ee06f] to-[#128C7E] text-white shadow-[0_18px_45px_-10px_rgba(18,140,126,0.9)] ring-2 ring-cream transition-transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <span className="animate-ring absolute inset-0 rounded-full bg-[#25D366]" />
          <WaGlyph className="relative size-8" />
          <span className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-ember-600 text-[10px] font-black ring-2 ring-cream">
            1
          </span>
        </motion.button>
      </div>

      {/* ---------- back to top ---------- */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-50 hidden size-11 place-items-center rounded-full border border-gold-500/50 bg-maroon-900/90 text-gold-300 shadow-xl backdrop-blur transition hover:bg-maroon-800 sm:grid"
            aria-label="Back to top"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ---------- mobile action bar ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <div className="glass-dark flex items-stretch gap-2 border-t border-gold-500/30 px-3 py-2.5">
          <a
            href={PHONE_LINK}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/50 py-3 text-xs font-extrabold uppercase tracking-wider text-gold-300 active:scale-95"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href={waMe(greetingMessage())}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3 text-xs font-extrabold uppercase tracking-wider text-white active:scale-95"
          >
            <WaGlyph className="size-4" /> WhatsApp
          </a>
          <a
            href="#contact"
            className="flex flex-[1.2] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-ember-600 py-3 text-xs font-extrabold uppercase tracking-wider text-cream ring-1 ring-gold-300/60 active:scale-95"
          >
            <MessageCircle className="size-4" /> Free Consult
          </a>
        </div>
      </div>
    </>
  );
}
