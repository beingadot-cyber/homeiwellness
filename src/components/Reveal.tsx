import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Flame } from "lucide-react";
import { cn } from "../utils/cn";

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em]",
        dark
          ? "border-gold-500/30 bg-gold-500/10 text-gold-300"
          : "border-saffron-600/25 bg-saffron-500/10 text-saffron-700",
        className
      )}
    >
      <Flame className="size-3.5 animate-flicker" />
      {children}
      <Flame className="size-3.5 animate-flicker" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left")}>
      <Reveal>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
            dark ? "text-cream" : "text-maroon-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-base leading-relaxed sm:text-lg",
              align === "center" ? "mx-auto" : "",
              dark ? "text-cream/65" : "text-maroon-700/80"
            )}
          >
            {sub}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2} className={cn("mt-6 flex items-center gap-3", align === "center" ? "justify-center" : "")}>
        <span className={cn("h-px w-14 sm:w-20", dark ? "bg-gold-500/40" : "bg-saffron-600/40")} />
        <span className="font-dev text-xl leading-none text-gold-500">राम</span>
        <span className={cn("h-px w-14 sm:w-20", dark ? "bg-gold-500/40" : "bg-saffron-600/40")} />
      </Reveal>
    </div>
  );
}
