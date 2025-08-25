const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      manaca: '#34824E',
      primary: '#34824E',
      secondary: '#34824E',
      darkestgreen: '#215c36',
      accent: '#4CAF50',
      gray: colors.gray,
      white: '#FFFFFF',
      black: '#000000',
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      transparent: 'transparent',
    },
    extend: {
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'hero-pattern': "url('/home-bg.png')",
      },
    },
  },
  plugins: [],
}