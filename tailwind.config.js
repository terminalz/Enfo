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
        handwriting: ["Sacramento", fontFamily.serif],
      },
      colors: {
        primary: {
          100: "#FAFAFA",
          200: "#f1f1f1",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
