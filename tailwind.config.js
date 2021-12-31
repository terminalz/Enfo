const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", fontFamily.sans],
        ibm: ["IBM Plex Sans", fontFamily.sans],
        handwriting: ["Sacramento", fontFamily.serif],
      },
      colors: {
        primary: {
          100: "#FFFEFC",
          200: "#f1f1f1",
          300: "#E16259",
          400: "#ec6258",
          500: "#F9F5F1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
