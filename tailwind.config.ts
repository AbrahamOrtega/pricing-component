import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        veryLightGrayishBlue: "#f6f6fe",
        lightGrayishBlue: "#b3b5c6",
        grayishBlue: "#6d708d",
        darkGrayishBlue: "#494c5f",
      },
    },
  },
  plugins: [],
} satisfies Config;
