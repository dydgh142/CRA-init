/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { base: "#eee", textbase: "#4a4a4a" },
      screens: {
        "max-sm": { max: "679px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
