/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'clean': ['Source Sans Pro', 'sans-serif']
    },
    colors: {
      'text': '#f5fdff',
      'background': '#011419',
      'primary': '#9ce9fc',
      'secondary': '#01242d',
      'accent': '#06c4f4',
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

