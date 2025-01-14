/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "background-shine": "background-shine 2s linear infinite",
        "popup-open": "popup .1s ease-out",
        "popup-close": "popup .1s reverse ease-in",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        popup: {
          from: {
            opacity: 0,
            transform: "scale(0.9)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
