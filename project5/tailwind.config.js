/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors:{
        "green-500": "var(--green-500)",
        "green-700": "var(--green-700)",
        "black":"var(--black)",
        "grey":"var(--grey)",
        "cream":"var(--cream)",
        "white":"var(--white)",
      },
      fontFamily:{
        "mont":"var(--font-mont)",
        "fraun":"var(--font-fraun)"
      }
    },
  },
  plugins: [],
}

