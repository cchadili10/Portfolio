/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px 35px 60px -15px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};