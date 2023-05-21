/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#FFFFFE',
        gold: '#CDB466',
        darkGold: '#DFA73E',
        brightOrange: '#FF7F00',
        brightOrangeLight: '#FFA143',
        gradientGray: 'linear-gradient(90deg, #323435 0%, #0C0C0C 99.99%, #2A2B2C 100%, #2A2B2C 100%)',
        lightGray: '#6C6C6C',
      },
      fontFamily: {
        gothic: ['Germania One'],
        cursive: ['Cinzel Decorative']
      }
    },
  },
  plugins: [],
}

