module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'darkestPurple': '#06001F',
      'orange': '#EC4800',
      'darkOrange': '#8C2B00',
      'darkerOrange': '#4D1700',
      'blue': '#0075FF',
      'darkBlue': '#003F7D',
      'darkerBlue': '#002347',
      'white': '#FFFFFF'
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