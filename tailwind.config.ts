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
