import { business, images } from "../data/site";
import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Evergreen Sound – Wedding DJ",
    description:
      "Evergreen Sound is a wedding DJ and MC offering ceremony music, cocktail hour sets, reception dance floors and lighting.",
  },

  nav: {
    label: "Main",
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#packages", label: "Packages" },
      { href: "#gallery", label: "Gallery" },
      { href: "#testimonials", label: "Reviews" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Check your date",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },

  hero: {
    kicker: "Wedding DJ & MC · Portland",
    script: "Let's dance",
    title: "Your first dance to the last song, done right",
    lead: "From the processional to the last dance, I read the room and keep your guests on the dance floor.",
    primary: "Check your date",
    secondary: "View packages",
    scrollLabel: "Scroll to About",
    imageAlt: "Barn reception hall draped in fairy lights and sheer curtains",
  },

  about: {
    eyebrow: "about me",
    title: `Hi, I'm ${business.djName}`,
    paragraphs: [
      "I've played more than 300 weddings over the last 12 years, from barn weddings for 40 guests to ballroom receptions for 300. My style is simple: I learn what you love and what gets your families dancing, then I blend the two all night.",
      "Before your day we'll plan your timeline together, build your must-play and do-not-play lists, and I'll coordinate with your venue and planner so you don't have to.",
    ],
    imageAlt: `${business.djName} mixing music behind the DJ decks`,
    stats: [
      { value: "300+", label: "weddings" },
      { value: "12", label: "years" },
      { value: "5.0", label: "average rating" },
    ],
  },

  services: {
    eyebrow: "services",
    title: "Everything your day needs to sound right",
    items: [
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
    ],
  },

  packages: {
    eyebrow: "packages",
    title: "Simple, all-inclusive pricing",
    lead: "All packages include professional sound, backup equipment, travel within 50 miles and full planning.",
    badge: "Most popular",
    cta: "Enquire",
    items: [
      {
        name: "Reception",
        price: "$1,400",
        features: ["5 hours of DJ & MC", "Reception sound system", "Dance floor lighting", "Online planning portal"],
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
    ],
  },

  gallery: {
    eyebrow: "gallery",
    title: "Moments from past weddings",
    openLabel: "Open photo",
    previewLabel: "Gallery preview",
    closeLabel: "Close",
    items: [
      { image: images.firstDanceConfetti, alt: "Couple sharing their first dance under falling confetti", caption: "First dance · The Grand Hall", layout: "tall" },
      { image: images.firstDanceSmoke, alt: "Bride and groom dancing on a cloud of low smoke", caption: "Dancing on the clouds", layout: "" },
      { image: images.brideDancing, alt: "Bride dancing with guests under festoon lights", caption: "Reception · Willow Barn", layout: "tall" },
      { image: images.ceremonyNightAisle, alt: "Evening ceremony aisle lit with fairy lights", caption: "Evening ceremony · Hillside Garden", layout: "" },
      { image: images.danceFloor, alt: "Guests dancing with glow sticks on a packed dance floor", caption: "Packed dance floor · Lakeside Manor", layout: "", video: true },
      { image: images.beachRecessional, alt: "Newlyweds walking back down a beach aisle as guests cheer", caption: "Just married · Beach ceremony", layout: "wide", video: true },
    ],
  },

  testimonials: {
    eyebrow: "kind words",
    title: "What couples say",
    items: [
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
    ],
  },

  faq: {
    eyebrow: "good to know",
    title: "Questions couples ask",
    items: [
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
    ],
  },

  contact: {
    eyebrow: "say hello",
    title: "Check your date",
    lead: "Tell me a bit about your wedding and I'll reply within 24 hours with availability and a tailored quote.",
    location: "Portland, OR · travels nationwide",
    imageAlt: "Wedding rings resting on a pale pink bouquet",
    details: { email: "Email", phone: "Phone", location: "Based in" },
    form: {
      names: "Your names",
      namesPlaceholder: "e.g. Sam & Jordan",
      email: "Email",
      emailPlaceholder: "you@example.com",
      date: "Wedding date",
      guests: "Guest count",
      venue: "Venue",
      venuePlaceholder: "Venue name or town",
      package: "Package",
      packageUnsure: "Not sure yet",
      message: "Message",
      messagePlaceholder: "Tell me about your music taste, your plans for the day…",
      submit: "Send enquiry",
    },
    messages: {
      namesRequired: "Please tell me your names.",
      emailInvalid: "Please enter a valid email address.",
      dateRequired: "Please choose your wedding date.",
      datePast: "That date has already passed.",
      success: "Thanks, {names}! I'll check {date} and get back to you within 24 hours.",
    },
  },

  footer: {
    tagline: "Wedding DJ & MC · Portland, OR · travels nationwide",
    sample: "Sample site",
    photosFrom: "Photos from",
    backToTop: "Back to top",
  },
};

export default en;
