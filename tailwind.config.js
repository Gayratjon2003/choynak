/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "green": "#27A083"
      },
      fontSize: {
        30: "30px"
      }
    },
  },
  plugins: [],
};
