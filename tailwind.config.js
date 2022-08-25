/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      vl: '1140px',
      xl: '1440px'
    },
    minHeight: {
      '3/10': '30%',
      '1/2': '50%',
      '5/10': '55vh',
      '6/10': '60vh',
      '7/10': '70%',
      '8/10': '80%',
      '1': '100vh',
    },
    minWidth: {
      "3/10": '30%',
      '6/10': '60%',
      '7/10': '70%',
      '1': '100%',
    },
    maxWidth: {
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
    },
    maxHeight: {
      '9/10': '90%'
    },
  
    extend: {
      fontFamily: {
        'sans': ['arial', 'sans-serif'],
      },
        backgroundImage: {
          'main-header-img': "url('/img/tile-structure-pattern.jpeg')"
        },
      colors: {
        'overlay-dark': "#272a2e",
        'vivid-red': "#c20b1d",
        'darker-red': "#7c1910",
        'light-gray': "7A7A7A",
        'dark-green': "#00685a",
        'border-gray': "#CBD2DE",
        'light-blue': "#F5F9FD",
        'footer-gray': "#181F2A",
        'footer-border': "#262D39",
      },
      boxShadow: {
        'btn-shadow': "0 16px 32px -16px rgba(255,94,20,.64)",
        'img-shadow': "64px 64px 160px -40px rgba(0,0,0,.24)",
      }
        
    },
  },
  plugins: [],
}
