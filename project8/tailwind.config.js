/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          'dark-gray': 'hsl(217, 19%, 35%)',
          dark: 'hsl(214, 17%, 51%)',
          grayish: 'hsl(212, 23%, 69%)',
          'light-grey': 'hsl(210, 46%, 95%)'
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
