/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        'green-400':'hsl(172,67%,45%)',
        'green-900':'hsl(183, 100%, 15%)',
        'grey-500':'hsl(186, 14%, 43%)',
        'grey-400': 'hsl(184, 14%, 56%)',
        'grey-200': 'hsl(185, 41%, 84%)',
        'grey-50': 'hsl(189, 47%, 97%)',
        'white': 'hsl(0, 100%, 100%)'
      },
      fontFamily:{
        'space-mono':['Space Mono', 'monospace'],
        'font-weight': 700,
      }
    },
  },
  plugins: [],
}

