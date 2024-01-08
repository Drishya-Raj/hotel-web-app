/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary :'#FEBB02',
        secondary:'#006CE4',
        blue:'#2A90D9'
      }
    },
  },
  plugins: [],
}