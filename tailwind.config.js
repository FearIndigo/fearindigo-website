const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["Righteous", ...defaultTheme.fontFamily.sans],
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        purple: "#1A2669",
        orange: "#B56B51",
        indigo: "#3F51B5",
        green: "#68B52D",
        "green-dark": "#3F691F",
      },
    },
  },
  plugins: [],
};
