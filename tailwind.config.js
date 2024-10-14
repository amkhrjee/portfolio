/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["autumn"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: "Courier Prime",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
