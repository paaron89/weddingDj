// All page content lives here so it can be edited without touching markup.
// Photos are free stock images from Unsplash – see src/assets/photos/CREDITS.md.

import heroBarnLights from "../assets/photos/hero-barn-lights.jpg";
import djAlex from "../assets/photos/dj-alex.jpg";
import firstDanceConfetti from "../assets/photos/first-dance-confetti.jpg";
import firstDanceSmoke from "../assets/photos/first-dance-smoke.jpg";
import danceFloor from "../assets/photos/dance-floor.jpg";
import ceremonyNightAisle from "../assets/photos/ceremony-night-aisle.jpg";
import brideDancing from "../assets/photos/bride-dancing.jpg";
import beachRecessional from "../assets/photos/beach-recessional.jpg";
import dinnerStringLights from "../assets/photos/dinner-string-lights.jpg";
import ringsBouquet from "../assets/photos/rings-bouquet.jpg";

export const business = {
  name: "Evergreen",
  nameAccent: "Sound",
  djName: "Alex",
  email: "hello@evergreensound.example",
  phone: "(555) 012-3456",
  location: "Portland, OR · travels nationwide",
};

export const photos = {
  hero: { src: heroBarnLights, alt: "Barn reception hall draped in fairy lights and sheer curtains" },
  about: { src: djAlex, alt: "Alex mixing music behind the DJ decks" },
  testimonials: { src: dinnerStringLights, alt: "Wedding guests dining under trees strung with lights" },
  contact: { src: ringsBouquet, alt: "Wedding rings resting on a pale pink bouquet" },
};

export const stats = [
  { value: "300+", label: "weddings" },
  { value: "12", label: "years" },
  { value: "5.0", label: "average rating" },
];

// `icon` matches a name in src/components/Icon.astro
export const services = [
  {
    icon: "rings",
    title: "Ceremony music",
    text: "Wireless mics for your officiant and vows, plus perfectly timed music for the processional, signing and recessional.",
  },
  {
    icon: "glasses",
    title: "Cocktail hour",
    text: "Relaxed background sets while you take photos, whether that's jazz, acoustic covers or something to match your theme.",
  },
  {
    icon: "music",
    title: "Reception & dance floor",
    text: "Mixed live and adjusted to the crowd, with music for every generation and a floor that stays full until the last song.",
  },
  {
    icon: "mic",
    title: "MC services",
    text: "Friendly, well-paced announcements for entrances, speeches, cake cutting and the send-off, with no cheesy gimmicks.",
  },
  {
    icon: "sparkle",
    title: "Lighting",
    text: "Uplighting in your colours, dance floor effects and a monogram projection to change the feel of the room.",
  },
  {
    icon: "calendar",
    title: "Planning",
    text: "An online planner, a timeline meeting and a call with your venue so the day runs on time.",
  },
] as const;

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

// `layout` controls the tile size in the gallery grid: "tall", "wide" or "" (normal).
export const gallery = [
  { image: firstDanceConfetti, alt: "Couple sharing their first dance under falling confetti", caption: "First dance · The Grand Hall", layout: "tall" },
  { image: firstDanceSmoke, alt: "Bride and groom dancing on a cloud of low smoke", caption: "Dancing on the clouds", layout: "" },
  { image: brideDancing, alt: "Bride dancing with guests under festoon lights", caption: "Reception · Willow Barn", layout: "tall" },
  { image: ceremonyNightAisle, alt: "Evening ceremony aisle lit with fairy lights", caption: "Evening ceremony · Hillside Garden", layout: "" },
  { image: danceFloor, alt: "Guests dancing with glow sticks on a packed dance floor", caption: "Packed dance floor · Lakeside Manor", layout: "", video: true },
  { image: beachRecessional, alt: "Newlyweds walking back down a beach aisle as guests cheer", caption: "Just married · Beach ceremony", layout: "wide", video: true },
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
