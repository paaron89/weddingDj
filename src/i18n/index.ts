import { getRelativeLocaleUrl } from "astro:i18n";
import en from "./en";
import hu from "./hu";
import type { Content } from "./types";

export const languages = {
  hu: "Magyar",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "hu";

const content: Record<Lang, Content> = { hu, en };

export function getLang(locale: string | undefined): Lang {
  return locale && locale in content ? (locale as Lang) : defaultLang;
}

// Text for the language of the current page, e.g. useContent(Astro.currentLocale)
export function useContent(locale: string | undefined): Content {
  return content[getLang(locale)];
}

// Home page URL for a language: "/" for Hungarian, "/en/" for English
export function homeUrl(lang: Lang): string {
  return getRelativeLocaleUrl(lang);
}
