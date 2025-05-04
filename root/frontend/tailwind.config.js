// tailwind.config.js
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/(button|ripple|spinner).js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" }
        }
      },
      colors: {},
      fontFamily: {
        body: ["Press Start 2P", "cursive"]
      },
      animation: {
        typing: "typing 2s steps(20, end) forwards",
        blink: "blink 0.7s infinite"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};