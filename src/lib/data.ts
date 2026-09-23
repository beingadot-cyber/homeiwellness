export interface Product {
  name: string;
  sanskrit: string;
  tag: string;
  desc: string;
  ingredients: string;
  price: number;
  badge?: string;
  img: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Homei Blood",
    sanskrit: "होमी रक्त",
    tag: "Blood Health & Purification",
    desc: "Daily drops that awaken your body's inner defence force — stay protected through every season.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Bestseller",
    img: "/images/blood.png",
  },
  {
    name: "Homei Kidz",
    sanskrit: "होमी किड्ज़",
    tag: "Child Health & Vitality",
    desc: "Vedic oil ritual for strong roots, reduced hair fall and a natural, lustrous shine.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Premium",
    img: "/images/kidz.png",
  },
  {
    name: "Homei Eye",
    sanskrit: "होमी दृष्टि",
    tag: "Eye Care & Vision Support",
    desc: "Kindles the sacred digestive fire — freedom from gas, acidity and a sluggish gut.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Bestseller",
    img: "/images/eye.png",
  },
  {
    name: "Homei Madhu",
    sanskrit: "होमी मधु",
    tag: "Diabetes Care Support",
    desc: "Gentle yet deep relief for stiff joints, backaches and age-related discomfort.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Premium",
    img: "/images/madhu.png",
  },
  {
    name: "Homei Digest",
    sanskrit: "होमी डाइजेस्ट",
    tag: "Digestive Care Drops",
    desc: "Purifies the blood from within for clear, radiant, naturally glowing skin.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Bestseller",
    img: "/images/digest.png",
  },
  {
    name: "Homei Adult",
    sanskrit: "होमी अडल्ट",
    tag: "Adult Vitality & Wellness",
    desc: "Calms the restless mind — deep, refreshing sleep without habit-forming sedatives.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Premium",
    img: "/images/adult.png",
  },
  {
    name: "Homei Adolescent",
    sanskrit: "होमी अडोलेसेन्ट",
    tag: "Teen Growth & Wellness",
    desc: "Rebuilds your ojas — all-day stamina, sharp focus and warrior-like vigour.",
    ingredients: "Natural Homeo",
    price: 250,
    badge: "Bestseller",
    img: "/images/adolescent.png",
  },
];

export interface Testimonial {
  name: string;
  loc: string;
  concern: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Sharma",
    loc: "Jaipur",
    concern: "Chronic Acidity — 20 yrs",
    text: "Twenty years of antacids, yet real peace came only with Agni Deep. Three months in, I eat like a young man again. The doctor personally guided my dosage on WhatsApp.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    loc: "Indore",
    concern: "Severe Hair Fall",
    text: "After my pregnancy, clumps of hair would fall daily. Kesh Nikhar changed everything in 8 weeks. My hairline has filled back — even my parlour didi asked my secret!",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    loc: "Varanasi",
    concern: "Knee Pain",
    text: "Climbing the ghat steps had become impossible at 62. Sandhi Sukh drops made my knees young again — I now walk to Vishwanath ji every morning, pain-free.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    loc: "Ahmedabad",
    concern: "Insomnia & Anxiety",
    text: "Corporate stress stole my sleep for years. Man Shanti gave me deep, natural sleep within days — no heaviness, no addiction. I wake up before my alarm, fresh.",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    loc: "Lucknow",
    concern: "Skin Allergy",
    text: "Ten years of creams and steroid tubes. Twacha Glow healed me from inside out in four months. My skin finally breathes — the glow is pure, not painted.",
    rating: 4,
  },
  {
    name: "Mohan Das",
    loc: "Haridwar",
    concern: "Low Immunity",
    text: "Every changing season meant fever and cough for my whole family. Since Shakti Amrit entered our home, even the children sail through winters untouched.",
    rating: 5,
  },
  {
    name: "Deepika Rao",
    loc: "Bengaluru",
    concern: "Fatigue & Low Energy",
    text: "By 4 PM I used to drag myself through the day. Ojas Vital brought back a vitality I had not felt since my twenties. It genuinely feels like liquid prana.",
    rating: 5,
  },
  {
    name: "Harpreet Gill",
    loc: "Ludhiana",
    concern: "Gas & Bloating",
    text: "I was sceptical of homeopathy, honestly. But one consultation on WhatsApp — such patient listening — and Agni Deep fixed what years of tablets could not.",
    rating: 4,
  },
];
