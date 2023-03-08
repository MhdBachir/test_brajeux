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
        },
        orange: {
          'DEFAULT': '#FF4007',
        }
      },
      gap:{
        '13': '3.25rem',
      },
      height: {
        content: 'fit-content'
      },
      width: {
        content: 'fit-content'
      }
    },
  },

  plugins: [],
}
