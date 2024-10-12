/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["emerald", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
