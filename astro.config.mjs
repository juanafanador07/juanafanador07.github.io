// @ts-check
import { loadEnv } from "vite";
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import favicons from "astro-favicons";
const { ASTRO_SITE } = loadEnv(process.env.ASTRO_SITE || "", process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: ASTRO_SITE,
  integrations: [
    tailwind(),
    icon(),
    favicons({
      name: "Portafolio de Juan Afanador",
      short_name: "Portafolio",
      themes: ["#ecfdf5", "#022c22"],
    }),
  ],
  env: {
    schema: {
      AVAILABLE_TO_WORK: envField.boolean({
        access: "public",
        context: "client",
        default: true,
        optional: false,
      }),
      ASTRO_SITE: envField.string({
        access: "public",
        context: "client",
        optional: false,
      }),
    },
  },
});
