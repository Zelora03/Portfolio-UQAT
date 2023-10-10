/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'clean': ['Source Sans Pro', 'sans-serif']
    },
    colors:{
      'text': '#e6e6f4',
      'background': '#06060e',
      'light-background': '#0E0E16',
      'primary': '#0f5756',
      'secondary': '#0b0c41',
      'accent': '#3bdedb',
    },
    extend: {},
  },
  plugins: [],
}

