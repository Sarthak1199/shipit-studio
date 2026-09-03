import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F5F5F0",
        surface: "#FFFFFF",
        surface2: "#ECEEE6",
        ink: "#1F2416",
        muted: "#6A7160",
        line: "rgba(31,36,22,0.10)",
        moss: "#2E3A1F",
        leaf: "#5C7A3A",
        sage: "#9DB27E",
        sky: "#DFE7EC",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-dm)", "system-ui", "sans-serif"],
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
