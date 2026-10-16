// All page content lives here so it can be edited without touching markup.

export const business = {
  name: "Evergreen",
  nameAccent: "Sound",
  djName: "Alex",
  email: "hello@evergreensound.example",
  phone: "(555) 012-3456",
  location: "Portland, OR · travels nationwide",
};

export const stats = [
  { value: "300+", label: "weddings" },
  { value: "12", label: "years" },
  { value: "5.0", label: "average rating" },
];

export const services = [
  {
    icon: "⚭",
    title: "Ceremony music",
    text: "Wireless mics for your officiant and vows, plus perfectly timed music for the processional, signing and recessional.",
  },
  {
    icon: "☕",
    title: "Cocktail hour",
    text: "Relaxed background sets while you take photos, whether that's jazz, acoustic covers or something to match your theme.",
  },
  {
    icon: "♫",
    title: "Reception & dance floor",
    text: "Mixed live and adjusted to the crowd, with music for every generation and a floor that stays full until the last song.",
  },
  {
    icon: "🎤",
    title: "MC services",
    text: "Friendly, well-paced announcements for entrances, speeches, cake cutting and the send-off, with no cheesy gimmicks.",
  },
  {
    icon: "✨",
    title: "Lighting",
    text: "Uplighting in your colours, dance floor effects and a monogram projection to change the feel of the room.",
  },
  {
    icon: "📋",
    title: "Planning",
    text: "An online planner, a timeline meeting and a call with your venue so the day runs on time.",
  },
];

export type Package = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    name: "Reception",
    price: "$1,400",
    features: [
      "5 hours of DJ & MC",
      "Reception sound system",
      "Dance floor lighting",
      "Online planning portal",
    ],
  },
  {
    name: "Classic",
    price: "$2,100",
    featured: true,
    features: [
      "7 hours of DJ & MC",
      "Ceremony + cocktail hour sound",
      "Wireless mics for vows & speeches",
      "Dance floor lighting",
      "12 uplights in your colours",
    ],
  },
  {
    name: "Signature",
    price: "$2,900",
    features: [
      "Full day, up to 9 hours",
      "Everything in Classic",
      "Monogram projection",
      "Dancing-on-the-clouds effect",
      "Live sax add-on discount",
    ],
  },
];

// `variant` picks a gradient placeholder from global.css (.g-1 … .g-6).
// Replace with real images in public/ or src/assets/ later.
export const gallery = [
  { caption: "First dance · Willow Barn", variant: 1 },
  { caption: "Uplighting · The Grand Hall", variant: 2 },
  { caption: "Dance floor clip · Lakeside Manor", variant: 3, video: true },
  { caption: "Ceremony · Rose Garden", variant: 4 },
  { caption: "Last dance sparklers", variant: 5 },
  { caption: "Grand entrance clip", variant: 6, video: true },
];

export const testimonials = [
  {
    quote: "Alex had our grandparents and our college friends on the same dance floor. People are still talking about it.",
    couple: "Sam & Jordan",
    date: "June 2025",
  },
  {
    quote: "He took our messy song list and made it flow. The ceremony timing was perfect and the MC work was warm without being cheesy.",
    couple: "Priya & Tom",
    date: "September 2025",
  },
  {
    quote: "Calm, organised and so much fun. He sorted everything with the venue so we didn't have to worry about a thing.",
    couple: "Maria & Chris",
    date: "May 2026",
  },
];

export const faqs = [
  {
    question: "How far in advance should we book?",
    answer: "Most couples book 9–14 months ahead. Summer Saturdays go first, so check your date as early as you can.",
  },
  {
    question: "How does the deposit work?",
    answer: "A 30% deposit secures your date. The balance is due 30 days before the wedding. You can pay by card or bank transfer.",
  },
  {
    question: "Can guests make song requests?",
    answer: "Yes. Guests can request songs on the night or ahead of time through a link you share. I'll play them when they suit the moment and will always stick to your do-not-play list.",
  },
  {
    question: "Can we give you a do-not-play list?",
    answer: "Absolutely. Your planning portal has must-play, play-if-possible and do-not-play lists. Anything on the do-not-play list won't be played, even if a guest requests it.",
  },
  {
    question: "What equipment do you bring?",
    answer: "Professional speakers sized for your venue, wireless microphones, a clean DJ booth, lighting, and a full backup system on site for every event.",
  },
  {
    question: "Do you have insurance?",
    answer: "Yes. I carry public liability insurance and all equipment is PAT tested. Certificates are available for your venue on request.",
  },
];
