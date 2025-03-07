import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main:"#32402f"
      },
      fontFamily: {
        martelSans: ['var(--font-martel-sans)', "sans-serif"],
        arimo: ['var(--font-arimo)', "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
