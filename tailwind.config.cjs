/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#DCAE1D",
        red: "#d22",
        green: "#59fc8e",
        grey: '#1d1e22'
      }
    },
    fontFamily: {
      primary: 'Gentium Book Basic'
    }
  },
  plugins: [],
}
