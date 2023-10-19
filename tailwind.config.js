/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'clean': ['Source Sans Pro', 'sans-serif']
    },
    colors:{
      'text': '#030c06',
      'background': '#effbf3',
      'background-dark': '#e3efe7',
      'primary': '#54cfba',
      'secondary': '#bfdeed',
      'accent': '#3185af',
    },
    screens: {
      'xm': '600px',
      
      'sm': '1140px',
    },
    extend: {},
  },
  plugins: [],
}

