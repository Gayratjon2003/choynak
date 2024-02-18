/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "green": "#27A083"
      },
      fontSize: {
        25: "25px",
        30: "30px"
      },
      minWidth: {
        396: "392px",
        550: "540px",
        260: "256px",
      },
      padding: {
        15: "15px"
      },
      width: {
        396: "396px"
      }
    },
  },
  plugins: [],
};
