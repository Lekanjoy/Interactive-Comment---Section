/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(212, 24%, 26%)",
        GrayishBlue: "hsl(211, 10%, 45%)",
        LightGray: "hsl(223, 19%, 93%)",
        VeryLightGray: "hsl(228, 33%, 97%)",
        White: "hsl(0, 0%, 100%)",
        ModerateBlue: "hsl(238, 40%, 52%)",
        SoftRed: "hsl(358, 79%, 66%)",
        LightGrayishBlue: "hsl(239, 57%, 85%)",
        PaleRed: "hsl(357, 100%, 86%)",
      },
      fontFamily:{
        Rubik: "Rubik"
      }
    },
  },
  plugins: [],
};
