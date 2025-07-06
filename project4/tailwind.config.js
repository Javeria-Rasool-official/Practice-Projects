/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        white:"var(--white)",
        "stone-100": "var(--stone-100)",
        "stone-150": "var(--stone-150)",
        "stone-600": "var(--stone-600)",
        "stone-900": "var(--stone-900)",
        "brown-800": "var(--brown-800)",
        "rose-800": "var(--rose-800)",
        "rose-50": "var(--rose-50)",
      },
      fontFamily: {
        outfit: "var(--font-outfit)",
        young: "var(--font-young)",
      },
    },
  },
  plugins: [],
}

