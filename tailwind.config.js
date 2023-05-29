/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#2584c8",
    },
    fontFamily: {
      sans: ["Noto Sans JP"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
