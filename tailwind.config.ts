import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Full breakpoint scale (defined in order so min-width queries cascade correctly)
    screens: {
      xs: "375px", // standard phones (iPhone SE 2/3, 12–15 mini & up)
      sm: "640px", // large phones landscape / small tablets
      md: "768px", // tablets portrait (iPad, Galaxy Tab)
      lg: "1024px", // tablets landscape / small laptops
      xl: "1280px", // laptops (1280, 1366, 1440)
      "2xl": "1536px", // desktops / large laptops
      "3xl": "1680px", // large desktops (1680, 1920, 2560+)
    },
    extend: {
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
      },
      colors: {
        background: "oklch(1 0 0)",
        foreground: "oklch(0.2 0.03 265)",
        neon: "oklch(0.68 0.29 320)",
        "neon-pink": "oklch(0.68 0.27 350)",
        "neon-cyan": "oklch(0.78 0.18 215)",
        brand: {
          50: "oklch(0.98 0.02 300)",
          100: "oklch(0.95 0.04 300)",
          200: "oklch(0.90 0.08 300)",
          300: "oklch(0.82 0.14 305)",
          400: "oklch(0.74 0.22 305)",
          500: "oklch(0.65 0.28 305)",
          600: "oklch(0.58 0.28 305)",
          700: "oklch(0.50 0.26 305)",
          800: "oklch(0.42 0.22 305)",
          900: "oklch(0.32 0.18 305)",
          950: "oklch(0.22 0.12 305)",
        },
      },
      fontFamily: {
        sans: ["Google Sans", "Product Sans", "Plus Jakarta Sans", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["Google Sans", "Product Sans", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        display: ["Google Sans", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        serif: ["Apple Garamond", "EB Garamond", "Garamond", "Georgia", "serif"],
        mono: ["Space Grotesk", "Lexend", "monospace"],
        math: ["KaTeX_Math", "Times New Roman", "serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, oklch(0.65 0.28 305) 0%, oklch(0.68 0.27 350) 50%, oklch(0.60 0.26 280) 100%)",
        "aura-diagonal": "linear-gradient(135deg, oklch(1 0 0) 0%, oklch(0.98 0.015 300) 50%, oklch(0.96 0.03 290) 100%)",
        "aura-diagonal-soft": "radial-gradient(ellipse at 50% -10%, oklch(0.65 0.28 305 / 0.15) 0%, oklch(0.68 0.27 350 / 0.07) 40%, oklch(1 0 0 / 0) 75%)",
      },
      boxShadow: {
        "glow-neon": "0 0 25px oklch(0.68 0.29 320 / 0.35)",
        "glow-neon-lg": "0 0 45px oklch(0.65 0.28 305 / 0.4)",
        "glow-cyan": "0 0 25px oklch(0.78 0.18 215 / 0.25)",
        "2xs": "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        xs: "0 1px 3px 0 rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
