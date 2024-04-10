/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        userSoftRed: "hsl(10, 79%, 65%)",
        userCyan: "hsl(186, 34%, 60%)",
        userDarkBrown: "hsl(25, 47%, 15%)",
        userMediumBrown: "hsl(28, 10%, 53%)",
        userCream: "hsl(27, 66%, 92%)",
        userVeryPaleOrange: "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
