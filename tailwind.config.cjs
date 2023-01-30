/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        HeaderSideitems: "#0169FE",
        PrimaryButton: "#2B3990",
        TextBlue: "#2B3990",
        Secondary_Color: "#545479",
        PrimaryBlack: "#333333",
        SecondaryDarkColour: "#545479",
      },
    },
  },
  plugins: [],
};
