export const WA_NUMBER = "919090909090";
export const PHONE_DISPLAY = "+91 90909 09090";
export const PHONE_LINK = "tel:+919090909090";
export const BRAND = "HOMEI WELLNESS CLINIC";

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

const BAR = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬";
const pad = (label: string) => label.padEnd(9, " ");

/** Builds the master consultation message — aligned & alive. */
export const consultMessage = (d: ConsultData): string => {
  const details = [
    `👤 ${pad("Name")}: ${d.name || "—"}`,
    `📞 ${pad("Mobile")}: ${d.phone || "—"}`,
    `🏙️ ${pad("City")}: ${d.city || "—"}`,
    `💊 ${pad("Remedy")}: ${d.product || "Not sure yet"}`,
  ].join("\n");

  return [
    `🕉️ *॥ जय श्री राम ॥* 🕉️`,
    `*${BRAND}* — _Sanatan Healing, Modern Care_`,
    ``,
    `${BAR}`,
    `📋  *NEW CONSULTATION REQUEST*`,
    `${BAR}`,
    ``,
    `🙏 *Namaste Ji!*`,
    `I visited your website & would love to book a`,
    `*FREE Health Consultation* with your expert.`,
    ``,
    `\`\`\`${details}\`\`\``,
    `⏰ *Best Time to Call:* ${d.time || "Anytime"}`,
    ``,
    `🌿 *My Health Concern*`,
    `❝ ${d.concern || "General wellness guidance"} ❞`,
    ``,
    `💬 *Message for the Doctor*`,
    `_${d.message || "Please guide me towards natural healing."}_`,
    ``,
    `${BAR}`,
    `🙏 *Dhanyavaad!* Awaiting your kind reply.`,
    `❝ _आरोग्यम् परमं भाग्यम्_ ❞`,
    `_Health is the greatest fortune._ ✨`,
    ``,
    `🌐 _Sent with devotion from the_`,
    `_${BRAND} website_ 🌿`,
  ].join("\n");
};

/** Product quick-order message. */
export const orderMessage = (name: string, tag: string, price: number): string => {
  const details = [
    `💊 ${pad("Remedy")}: ${name}`,
    `🌿 ${pad("For")}: ${tag}`,
    `💰 ${pad("Price")}: ₹${price} /-`,
  ].join("\n");

  return [
    `🕉️ *॥ जय श्री राम ॥* 🕉️`,
    `*${BRAND}* — _Sanatan Healing, Modern Care_`,
    ``,
    `${BAR}`,
    `🛒  *REMEDY ORDER REQUEST*`,
    `${BAR}`,
    ``,
    `🙏 *Namaste Ji!*`,
    `I wish to order the following remedy:`,
    ``,
    `\`\`\`${details}\`\`\``,
    ``,
    `📦 Kindly share *availability*, *dosage* &`,
    `*delivery details* for my city.`,
    ``,
    `${BAR}`,
    `🙏 *Dhanyavaad!*`,
    `❝ _सर्वे सन्तु निरामयाः_ ❞`,
    `_May all be free from disease._ ✨`,
    ``,
    `🌐 _Sent from the ${BRAND} website_ 🌿`,
  ].join("\n");
};

/** Generic greeting for floating button / quick CTAs. */
export const greetingMessage = (): string =>
  [
    `🙏 *Namaste ${BRAND} Ji!*`,
    ``,
    `I just visited your website & I am truly impressed`,
    `by your *Sanatan homeopathic remedies*. 🌿`,
    ``,
    `I would like to book a *FREE Consultation* and`,
    `understand which remedy suits my health best.`,
    ``,
    `Kindly guide me. *Dhanyavaad!* 🕉️✨`,
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
