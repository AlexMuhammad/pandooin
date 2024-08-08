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
      },
    },
  },
  plugins: [],
};
export default config;
