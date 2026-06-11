import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

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
          900: "#0F0E0C",
          800: "#1A1916",
          700: "#2A2925",
          500: "#525049",
          300: "#8E8C85",
          200: "#B6B4AE",
          100: "#D4D2CC",
        },
        forest: {
          900: "#0E3F2D",
          800: "#143C2A",
          700: "#1F5B43",
          600: "#2D7259",
          500: "#3E8E6F",
          100: "#E8F1ED",
          50: "#F1F7F4",
        },
        gold: {
          700: "#8E6A2A",
          500: "#B89253",
          300: "#D4B681",
        },
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        editorial: {
          css: {
            "--tw-prose-body": theme("colors.ink.700"),
            "--tw-prose-headings": theme("colors.ink.900"),
            "--tw-prose-links": theme("colors.forest.900"),
            "--tw-prose-bold": theme("colors.ink.900"),
            "--tw-prose-quotes": theme("colors.ink.700"),
            "--tw-prose-quote-borders": theme("colors.forest.900"),
            "--tw-prose-code": theme("colors.ink.900"),
            "--tw-prose-pre-bg": theme("colors.ink.900"),
            "--tw-prose-pre-code": theme("colors.cream.100"),
            "--tw-prose-bullets": theme("colors.ink.300"),
            "--tw-prose-counters": theme("colors.ink.300"),
            "--tw-prose-hr": theme("colors.ink.100"),
            h1: { fontFamily: theme("fontFamily.serif").toString(), fontWeight: "300" },
            h2: { fontFamily: theme("fontFamily.serif").toString(), fontWeight: "400" },
            h3: { fontFamily: theme("fontFamily.serif").toString(), fontWeight: "400" },
            a: { textDecoration: "underline", textUnderlineOffset: "4px" },
            code: {
              fontWeight: "400",
              backgroundColor: theme("colors.cream.200"),
              padding: "0.15rem 0.4rem",
              borderRadius: "0",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
