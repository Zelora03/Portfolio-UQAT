/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'clean': ['Source Sans Pro', 'sans-serif']
    },
    colors: {
      'text': '#f7edf7',
      'background': '#160915',
      'primary': '#c4a073',
      'secondary': '#0b190b',
      'accent': '#4773a9',
     },
     
    screens: {
      'xm': '600px',
      
      'sm': '1140px',

      'm': '1570px'
    },
    extend: {
      animation: {
        triangle: 'wiggle 1s ease-in-out infinite',
        circle: 'bounce 3s ease-out infinite',
        square: 'spin 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

