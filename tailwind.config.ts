import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        darkpurple: "rgb(62, 51, 75)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        darkenIn: "darkenIn 3s ease-in-out forwards",
        opacityIn: "opacityIn 0.75s ease-in-out forwards",
      },
      keyframes: {
        darkenIn: {
          "0%": { filter: "opacity(100%)" },
          "30%": { filter: "opacity(100%)" },
          "100%": { filter: "opacity(0%)", display: "none" },
        },
        opacityIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
