// @ts-check
import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import favicons from "astro-favicons";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon(),
    favicons({
      name: "Portafolio de Juan Afanador",
      short_name: "Portafolio",
      themes: ["#ecfdf5", "#022c22"],
    }),
    sitemap(),
    robotsTxt(),
  ],
  env: {
    schema: {
      AVAILABLE_TO_WORK: envField.boolean({
        access: "public",
        context: "client",
        optional: false,
      }),
    },
  },
});
