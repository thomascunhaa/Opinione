/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#7e5bf6'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}