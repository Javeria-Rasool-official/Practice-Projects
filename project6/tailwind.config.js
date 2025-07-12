/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors:{
        red:"var(--red)",
        cyan:"var(--cyan)",
        orange:"var(--orange)",
        blue:"var(--blue)",
        white:"var(--white)",
        "grey-500":"var(--grey-500)",
        "grey-400":"var(--grey-400)",
      },
    },
  },
  plugins: [],
}

