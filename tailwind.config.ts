import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#02C551",
        secondary: "#02C55120",
        melon: "#F1FFF4",
        BgGray: "#F2F4F7",
        Error: "#D61E1E",
        Gray1: "#95979D",
        Gray2: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
export default config;
