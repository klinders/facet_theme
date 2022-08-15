/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: require('fast-glob').sync([
    './**/*.php'
  ]),
  theme: {
    colors:{
      primary: colors.pink,
      background: colors.stone
    },
    extend: {},
  },
  plugins: [],
}
