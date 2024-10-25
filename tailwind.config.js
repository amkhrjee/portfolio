/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["synthwave"],
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
