module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'lightPurple': '#CCC0E7',
      'darkerPurple': '#16092D',
      'darkestPurple': '#080014',
      'orange': '#EC4800',
      'darkOrange': '#BD5635',
      'darkerOrange': '#4D1700',
      'blue': '#006FDC',
      'darkBlue': '#003F7D',
      'darkerBlue': '#002347',
      'darkestBlue': '#122771',
      'white': '#DDDDE9',
      'black': '#000000'
    },
    extend: {
      fontFamily: {
        amiri: 'Amiri-Regular',
        fjalla: 'Fjalla-One'
      }
    },
  },
  plugins: [],
}