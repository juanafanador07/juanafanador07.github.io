// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  env: {
    schema: {
      AVAILABLE_TO_WORK: envField.boolean({
        access: "public",
        context: "client",
        default: true,
        optional: false,
      }),
    },
  },
});
