/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite"
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(calc(-100% - 2.5rem))',
          },
        },
      },
      colors : {
        dark : '#231F42',
        purple : '#5C47FB',
        violet : '#A497FD'
      },
      fontFamily : {
        openSans : ['Open Sans', 'sans-serif']
      },
      listStyleImage: {
        checkmark: 'url("../assets/correct.png")',
      },
    },
  },
  plugins: [],
}

