import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAF9",
        surface: "#FFFFFF",
        surface2: "#F0F0EE",
        ink: "#0A0A0A",
        muted: "#6B6B6B",
        line: "rgba(10,10,10,0.10)",
        moss: "#0A0A0A",
        leaf: "#0066FF",
        sage: "#B0B0B0",
        sky: "#EDEDEC",
        accent: "#0066FF",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        brand: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,30s) linear infinite",
        "marquee-reverse": "marquee var(--marquee-duration,30s) linear infinite reverse",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,36,22,.04), 0 12px 40px -12px rgba(31,36,22,.12)",
        lift: "0 2px 4px rgba(31,36,22,.05), 0 24px 60px -16px rgba(31,36,22,.22)",
      },
    },
  },
  plugins: [],
};
export default config;
