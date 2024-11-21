/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["dracula"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
