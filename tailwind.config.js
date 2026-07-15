/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D12",
          soft: "#12151C",
          surface: "#171B24",
          surface2: "#1D222D",
          border: "#262B37",
        },
        text: {
          DEFAULT: "#ECEEF3",
          muted: "#8B93A3",
          dim: "#5B6373",
        },
        amber: {
          brand: "#E8A33D",
          soft: "#F2C168",
          dim: "#8A5E24",
        },
        status: {
          live: "#4ADE80",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(232,163,61,0.06), transparent 60%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(232,163,61,0.25), 0 0 32px -8px rgba(232,163,61,0.35)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        typeline: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(14px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
