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
        hero: "url('/assets/img-hero.png')",
      },
      colors: {
        "pn-primary": "#004040",
        "pn-secondary": "#D6B66B",
        "pn-terniary": "#0B7373",
        "pn-gray": "#B8B8B8",
      },
      fontFamily: {
        unbounded: "var(--font-unbounded)",
        "alex-brush": "var(--font-alex-brush)",
        "albert-sans": "var(--font-albert-sans)",
        signature: "var(--font-signature)",
      },
    },
  },
  plugins: [],
};
export default config;
