/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["dark", "bumblebee", "pastel"],
  },
  theme: {
    extend: {},
    fontFamily: {
      Teko: ["Teko", "sans-serif"],
      Rubik: ["Rubik", "sans-serif"],
    },
  },

  plugins: [require("daisyui"), "@tanstack/query"],
};
