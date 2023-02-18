/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#1B2831",

          "base-100": "#FAFAFA",

          info: "#53C1E9",

          success: "#0D5E34",

          warning: "#BC900B",

          error: "#E14768",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
