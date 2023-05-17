/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {},
      screens: {
        "max-sm": { max: "679px" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
