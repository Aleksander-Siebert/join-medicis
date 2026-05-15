import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        cream: {
          50: "#FEFCF8",
          100: "#FAF7F2",
          200: "#F2EDE4",
          300: "#E8E1D5",
        },
        ink: {
          900: "#1A1916",
          700: "#3A3935",
          500: "#6B6A65",
          300: "#9C9B96",
          100: "#D4D2CC",
        },
        forest: {
          900: "#1A3328",
          800: "#1E3D30",
          700: "#2A5442",
          600: "#3B7359",
          100: "#EAF2EE",
          50: "#F2F7F4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
