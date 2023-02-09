/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
  plugins: [],
};
