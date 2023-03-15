/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //primary colors

        lightred: "hsl(0, 100%, 67%)",
        orangeyyellow: "hsl(39, 100%, 56%)",
        greenteal: "hsl(166, 100%, 37%)",
        cobaltblue: "hsl(234, 85%, 45%)",
  
        //gradient colors
          //background
        lightslateblue: "hsl(252, 100%, 67%)",
        lightroyalblue: "hsl(241, 81%, 54%)",
  
          //circle
        violetblue: "hsla(256, 72%, 46%, 1)",
        persianblue: "hsla(241, 72%, 46%, 0)",

        //neutral colors
        white: 'hsl(0, 0%, 100%)',
        paleblue: 'hsl(221, 100%, 96%)',
        lightlavender: 'hsl(241, 100%, 89%)',
        darkgreyblue: 'hsl(224, 30%, 27%)',

      },
    },
  },
  plugins: [],
};
