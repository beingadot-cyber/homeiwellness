export const WA_NUMBER = "919099438203";
export const PHONE_DISPLAY = "+91 90994 38203";
export const PHONE_LINK = "tel:+919099438203";
export const BRAND = "HOMEI WELLNESS";

export const waMe = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export interface ConsultData {
  name: string;
  phone: string;
  city: string;
  product: string;
  concern: string;
  time: string;
  message: string;
}

/** Builds the master consultation message — short & to the point. */
export const consultMessage = (d: ConsultData): string => {
  return [
    `🙏 *${BRAND}* — Namaste!`,
    `I'd like to book a *FREE Consultation*.`,
    ``,
    `👤 Name: ${d.name || "—"}`,
    `📞 Mobile: ${d.phone || "—"}`,
    `🏙️ City: ${d.city || "—"}`,
    `💊 Remedy: ${d.product || "Not sure yet"}`,
    `⏰ Best time to call: ${d.time || "Anytime"}`,
    ``,
    `🌿 Concern: ${d.concern || "General wellness guidance"}`,
    d.message ? `📝 ${d.message}` : ``,
  ]
    .filter(Boolean)
    .join("\n");
};

/** Product quick-order message. */
export const orderMessage = (name: string, tag: string, price: number): string => {
  return [
    `🙏 *${BRAND}* — Namaste!`,
    `I'd like to order:`,
    ``,
    `💊 ${name} (${tag})`,
    `💰 ₹${price}/-`,
    ``,
    `Please share availability & delivery details for my city.`,
  ].join("\n");
};

/** Generic greeting for floating button / quick CTAs. */
export const greetingMessage = (): string =>
  [
    `🙏 *Namaste ${BRAND}!*`,
    `I'd like to book a *FREE Consultation* and find the right remedy for me.`,
  ].join("\n");

/** Renders a WhatsApp-formatted string (*bold*, _italic_, ```mono```) to JSX-ready parts */
export type WaChunk = { kind: "bold" | "italic" | "mono" | "text"; value: string };

export function parseWhatsApp(raw: string): WaChunk[] {
  const chunks: WaChunk[] = [];
  const re = /(\*[^*\n]+\*|_[^_\n]+_|```[\s\S]*?```)/g;
  let last = 0;
  for (const m of raw.matchAll(re)) {
    const idx = m.index ?? 0;
    if (idx > last) chunks.push({ kind: "text", value: raw.slice(last, idx) });
    const token = m[0];
    if (token.startsWith("```"))
      chunks.push({ kind: "mono", value: token.slice(3, -3) });
    else if (token.startsWith("*")) chunks.push({ kind: "bold", value: token.slice(1, -1) });
    else chunks.push({ kind: "italic", value: token.slice(1, -1) });
    last = idx + token.length;
  }
  if (last < raw.length) chunks.push({ kind: "text", value: raw.slice(last) });
  return chunks;
}
