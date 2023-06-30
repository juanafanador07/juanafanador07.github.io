import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";
import webfontDownload from "vite-plugin-webfont-dl";
import * as path from "path";

export default defineConfig({
  plugins: [
    react(),
    imagePresets({
      project: widthPreset({
        widths: [200, 400, 600, 800, 1000, 1200],
        sizes: "(min-width: 768px) 25vw, (max-width: 767px) 50vw",
        formats: {
          webp: { quality: 80 },
          jpg: { quality: 80 },
        },
      }),
      profile: widthPreset({
        widths: [128, 192, 256],
        sizes: "(min-width: 768px) 25vw, (max-width: 767px) 50vw",
        formats: {
          webp: { quality: 80 },
          jpg: { quality: 80 },
        },
      }),
    }),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Fira+Mono&family=Roboto:wght@400;700&family=Ubuntu:wght@400;700&display=swap",
    ]),
  ],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
});
