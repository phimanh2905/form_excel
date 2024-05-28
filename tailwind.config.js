/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // Optionally, you can configure DaisyUI themes
  daisyui: {
    themes: ["light", "dark"], // DaisyUI themes
  },
};
