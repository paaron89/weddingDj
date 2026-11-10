import type { ImageMetadata } from "astro";

// Names match the icons in src/components/Icon.astro
export type IconName = "rings" | "glasses" | "music" | "mic" | "sparkle" | "calendar";

export type Package = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

export type GalleryItem = {
  image: ImageMetadata;
  alt: string;
  caption: string;
  // Tile size in the gallery grid
  layout: "tall" | "wide" | "";
  video?: boolean;
};

// Every language file must provide exactly this shape.
export interface Content {
  meta: { title: string; description: string };
  nav: {
    label: string;
    links: { href: string; label: string }[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    kicker: string;
    script: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    scrollLabel: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    imageAlt: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: { icon: IconName; title: string; text: string }[];
  };
  packages: {
    eyebrow: string;
    title: string;
    lead: string;
    badge: string;
    cta: string;
    items: Package[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    openLabel: string;
    previewLabel: string;
    closeLabel: string;
    items: GalleryItem[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; couple: string; date: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    location: string;
    imageAlt: string;
    details: { email: string; phone: string; location: string };
    form: {
      names: string;
      namesPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      date: string;
      guests: string;
      venue: string;
      venuePlaceholder: string;
      package: string;
      packageUnsure: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    // Used by the form script; {names} and {date} are filled in on submit
    messages: {
      namesRequired: string;
      emailInvalid: string;
      dateRequired: string;
      datePast: string;
      success: string;
    };
  };
  footer: {
    tagline: string;
    sample: string;
    photosFrom: string;
    backToTop: string;
  };
}
