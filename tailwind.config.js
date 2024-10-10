/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["dracula"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
