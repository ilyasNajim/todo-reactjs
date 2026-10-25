import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}", // <--- ضروري لـ TypeScript + React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
