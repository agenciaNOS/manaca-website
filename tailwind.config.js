const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      manaca: '#34824E',
      gray: '#F5F5F5',
      white: '#FFFFFF',
      black: '#000000',
      blue: colors.blue,
      red: colors.red,
      secondary: '#5b145c',
      darkestpurple: '#2a0a2f',
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}