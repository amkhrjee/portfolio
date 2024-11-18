/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["dracula"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "Fira Code",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
