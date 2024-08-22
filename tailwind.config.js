/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '34': '8.5rem',
      },
 
      colors: {
        'black-rgba': 'rgba(0,0,0,0.54)',
      },
    },
  },
  plugins: [],
}