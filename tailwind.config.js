/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          'DEFAULT': '#0D0D0D',
        }
      },
      gap:{
        '13': '3.25rem',
      }
    },
  },

  plugins: [],
}
