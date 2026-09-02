import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0D",
        surface: "#141418",
        surface2: "#1C1C22",
        ink: "#F3EFE6",
        muted: "#9B978F",
        line: "rgba(255,255,255,0.09)",
        pop: "#FF5A2D",
        lime: "#D4FF4F",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,30s) linear infinite",
        "marquee-reverse": "marquee var(--marquee-duration,30s) linear infinite reverse",
        pulseSoft: "pulseSoft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
