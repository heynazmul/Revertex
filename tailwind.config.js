/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        dark : '#231F42',
        purple : '#5C47FB',
        violet : '#A497FD'
      },
      fontFamily : {
        openSans : ['Open Sans', 'sans-serif']
      },
      listStyleImage: {
        checkmark: 'url("")',
      },
    },
  },
  plugins: [],
}

