/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
