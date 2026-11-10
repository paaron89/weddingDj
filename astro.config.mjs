// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Hungarian is the default language and lives at "/", English at "/en/".
  i18n: {
    defaultLocale: "hu",
    locales: ["hu", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
