/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    colors: {
      /*'text': '#dffbf7',
      'background': '#031c18',
      'primary': '#c41734',
      'secondary': '#074038',
      'accent': '#e62d4c',*/
      'text': '#f6fefe',
      'background': '#150F29',
      'primary': '#339e9e',
      'secondary': '#061313',
      'accent': '#718e8e',
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
      },
      fontFamily: {
        spartan: ['"League Spartan"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

